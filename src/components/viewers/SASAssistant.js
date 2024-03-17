/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useContext, useState, useEffect, Fragment } from "react";
import { useLocation } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import CircularProgress from '@mui/material/CircularProgress';
import { setupAssistant, runAssistant, uploadFile } from "@sassoftware/viya-assistantjs";
// import { functionSpecs, instructions } from "../../tools/sasAssistant";
import { AppContext } from "../../providers";
import Grid from "@mui/material/Grid";

import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import HtmlViewer from "../helpers/HtmlViewer";
import Button from "@mui/material/Button";
import FileSelectorButton from "../helpers/FileSelectorButton";

function SASAssistant(_props) {
  const [prompt, setPrompt] = useState("");
  const [instruct, setInstruct] = useState("");
  const [response, setResponse] = useState("");
  const [gptControl, setGptControl] = useState(null);
 // const [appEnv, setAppEnv] = useState(null);
  const [snackOpen, setSnackOpen] = useState(false)
  let appContext = useContext(AppContext);

  debugger;
  // console.log(props);
  let location = useLocation();
  let state = location.state; //the real props passed from the router
  const setupEnv = async () => {
    debugger;
    console.log(state);
    let configl = appContext.config[state.provider];
    let config = Object.assign({}, configl);
    config.provider = state.provider;
    config.source = state.source;
    config.viyaConfig.source = state.source;
    debugger;
    let user = state.user.split('@')[0].replace('.', '_');
    config.assistantName = config.assistantName + '_' + user;
  
    console.log(config);
    // get info on tools
    
    debugger;
    let gptControl = await setupAssistant(config);
    setGptControl(gptControl);
    let initialMsg = `
    <h3>Assistant is ready to use. </h3>
    <p> Provider: ${state.provider} </p>
    <p> Source: ${state.source} </p>
    <p> Assistant Name: ${gptControl.assistant.name} </p>
    <p> Assistant Id: ${gptControl.assistant.id} </p>
    <p> Asssistant Threadid: ${gptControl.thread.id} </p>
    `;
    setResponse(initialMsg);
    return "gptControl is ready to use.";
  };
  useEffect(() => {
    setupEnv()
      .then((m) => {
        console.log(m);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const _closeSnack = () => {
    setSnackOpen(false);
  }
  const _onFileSelect = (content, target, file) => {
    console.log(target);
    console.log(file);
    debugger;
    uploadFile(target, file, content, "assistants",gptControl)
      .then((r) => {
        console.log(r);
        setResponse(
          `<strong>${file.name}</strong>` + "<br/><br/>" + r + "<br/>" + response
        );
      })
      .catch((err) => {
        setResponse(
          `<strong>${file.name}</strong>` + "<br/><br/>" + err + "<br/>" + response
        );
      });

  };
  const _onChange = (e, type) => {
    debugger;
    let value = e.target.value;
    if (type === "prompt") {
      setPrompt(value);
    } else {
      setInstruct(value);
    }
  };
  const _onClick = () => {
    setSnackOpen(true);
    debugger;
    console.log(instruct);
    runAssistant(gptControl, prompt, instruct)
      .then((r) => {
        //TBD: handling types other than text
        setSnackOpen(false);
        let msg = "";
        for (let i = 0; i < r.length; i++) {
          msg = msg + r[i].content + "<br/>";
        }

        setResponse(
          `<strong>${prompt}</strong>` +
            "<br/><br/>" +
            msg +
            "<br/><br/>" +
            response
        );
      })
      .catch((err) => {
        setSnackOpen(false);
        setResponse(
          `<strong>${prompt}</strong>` + "<br/><br/>" + err + "<br/>" + response
        );
      });
  };
  let show = (
    <Grid container spacing={5} direction="row" alignContent="space-around">
         <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'center'}} 
            open={snackOpen} onClose={_closeSnack}>
              <CircularProgress color="secondary" />
        </Snackbar>
      <Grid item xs={4}>
        <Paper elevation={12} style={{padding: "10px" }}>
        <TextField
          id="prompt"
          type="text"
          label="prompt"
          multiline={true}
          minRows={12}
          style={{ width: '100%', alignment: "left" }}
          value={prompt}
          placeholder="Ask me anything"
          onChange={(e) => _onChange(e, "prompt")}
        />
        </Paper>
        <br />
        <Paper elevation={12} style={{padding: "10px" }}>
        <TextField
          id="instruct"
          type="text"
          label="instructions"
          multiline={true}
          minRows={6}
          style={{ width: "100%", alignment: "left" }}
          value={instruct}
          placeholder="Additional instructions(optional)"
          onChange={(e) => _onChange(e, "instruct")}
        />
        </Paper>
        <br />

      </Grid>
      <Grid item xs={8}>
        <Button variant="contained" color="primary" onClick={() => _onClick()}>
          Run
        </Button>
        <Fragment>
          <FileSelectorButton
            label="Select file to upload."
            onSelect={_onFileSelect}
          ></FileSelectorButton>
        </Fragment>
        
        <div id="page-wrap" style={{overflowY: 'scroll', height: '80vh' }}>
        <Paper elevation={12}>
        <HtmlViewer html={response} selections={null} />
        </Paper>
        </div>

        
      </Grid>
    </Grid>
  );
  /*
  let show =
    <div id="page-wrap">
      <Fragment>
        <FileSelectorButton label="Select file to upload." onSelect={_onFileSelect} ></FileSelectorButton>
      </Fragment>
      <TextField id="prompt" type="text" label="prompt" multiline={true} minRows={2} 
      style= {{width: '80ch', alignment: 'left'}} value={prompt} placeholder="Ask me anything"
       onChange={(e) => _onChange(e, 'prompt')}/>
      <br/>
      <TextField id="instruct" type="text" label="instructions" multiline={true} minRows={2}
       style= {{width: '80ch', alignment: 'left'}} value={instruct} placeholder="Additional instructions(optional)" 
       onChange={(e) => _onChange(e, 'instruct')}/>
      <br/>
      <Button variant="contained" color="primary" onClick={() => _onClick()}>Run</Button>
      <HtmlViewer html={response} selections={null} />
    </div>*/
  return show;
}
export default SASAssistant;
