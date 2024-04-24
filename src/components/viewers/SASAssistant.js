/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useContext, useState, useEffect, Fragment } from "react";
import { useLocation } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import CircularProgress from '@mui/material/CircularProgress';
import { setupAssistant, runAssistant} from "@sassoftware/viya-assistantjs";
// import { functionSpecs, instructions } from "../../tools/sasAssistant";
import { AppContext } from "../../providers";
import Grid from "@mui/material/Grid";

import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import HtmlViewer from "../helpers/HtmlViewer";
//import ReadMe from "../helpers/ReadMe.js";
import Button from "@mui/material/Button";
import FileSelectorButton from "../helpers/FileSelectorButton";
import formatInstructions from "../lib/formatInstructions.js";

function SASAssistant(_props) {
  const [prompt, setPrompt] = useState("");
  const [instruct, setInstruct] = useState("");
  const [response, setResponse] = useState("Welcome to SAS Assistant. Please enter a prompt to get started. \n");
  const [gptControl, setGptControl] = useState(null);
 // const [appEnv, setAppEnv] = useState(null);
  const [snackOpen, setSnackOpen] = useState(false)
  let appContext = useContext(AppContext);

  debugger;
  // console.log(props);
  let location = useLocation();
  let state = location.state; //the real props passed from the router
  const setupEnv = async () => {
    let configl = appContext.config[state.provider];
    let config = Object.assign({}, configl);
    config.provider = state.provider;
    config.toolSet = (state.toolSet === undefined) ? 'viya' : state.toolSet;

    let user = state.user.split('@')[0].replace('.', '_');
    config.assistantName = config.assistantName + '_' + user;
  
    console.log('------------------' , config);
    // get info on tools
    
    debugger;
    let gptControli = await setupAssistant(config);
    let initialMsg = `

    <h2> Assistant is ready to use</h2>

    <ul>
    <li>devMode: ${gptControli.devMode}</li>
    <li>Provider: ${state.provider}</li>
    <li>Model: ${gptControli.model}</li>
    <li>Assistant Name: ${gptControli.assistant.name}</li>
    <li>Assistant Id: ${gptControli.assistant.id}</li>
    <li>Asssistant Threadid: ${gptControli.thread.id}</li>
    <li>Vector Store Id: ${gptControli.vectorStoreid}</li>
    </ul>

    `;

    setGptControl(gptControli);
    setResponse(initialMsg);
    return "gptControl is ready to use.";
  };
  useEffect(() => {
    setSnackOpen(true);
    setupEnv()
      .then((m) => {
        setSnackOpen(false);
        console.log(m);
      })
      .catch((err) => {
        setSnackOpen(false);
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
    setSnackOpen(true);
    gptControl.uploadFile(target, content,'text/plain', "assistants")
      .then((r) => {
        console.log(r);
        setSnackOpen(false);
        setResponse(
          `<strong>${JSON.stringify(r)}</strong><br/>` + response
        );
      })
      .catch((err) => {
        setSnackOpen(false);
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
  const _localRun = (action) => {
    if (action === "tools") {
      
      let msg = '```html' + '<ul>';
      debugger;
      gptControl.assistant.tools.forEach((item) => {
        if (item.type !== 'function') {
          let m = '<li>' + item.type + ':' + 'System Tool</li>';
          msg = msg + m;
        } else {
          let t = item.function;
          let m = '<li>' + t.name + ' : ' + t.description + '</li>';
          msg = msg + m;
        }
      });
      msg + '</ul> ```'
      setResponse(msg + '<br></br>' + response);
    } else if (action === "clear") {
      setResponse("");
    }
  }
  const _onClick = () => {
    setSnackOpen(true);
    debugger;
    let instructions = formatInstructions(instruct);
    debugger;
    console.log(prompt);
    // let userPrompt =  prompt.replace(/,/g, ' ');
    let elaspedTime = new Date();
    runAssistant(gptControl, prompt, instructions)
      .then((r) => {
        //TBD: handling types other than text
        setSnackOpen(false);
        let msg = "";
        for (let i = 0; i < r.length; i++) {
          msg = msg + r[i].content + "<br/>";
        }
        elaspedTime = Math.round((new Date() - elaspedTime) / 1000);
        msg = msg + "<br/>" + "Total Time " + elaspedTime + " seconds";
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
  let menubar = 
  <Grid item direction="column" xs={4}>
    <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'center'}} 
      open={snackOpen} onClose={_closeSnack}>
        <CircularProgress color="secondary" />
    </Snackbar>
    <Button variant="outlined" style = {{border: 2}} color="primary" onClick={() => _onClick()}>
      Run
    </Button>
    <Button variant="outlined" style = {{border: 2}} color="primary" onClick={() => _localRun("tools")}>
    tools
    </Button>
    <Button variant="outlined" style = {{border: 2}} color="primary" onClick={() => _localRun("clear")}>
    Clear
    </Button>
  <Fragment>
    <FileSelectorButton
      label="Select file to upload."
      onSelect={_onFileSelect}
    ></FileSelectorButton>
  </Fragment>
 </Grid>;
  debugger;
  console.log(response);
  let main = (
    <Grid container spacing={2} direction="row" alignContent="space-around">
      
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
        <div id="page-wrap" style={{overflowY: 'scroll', height: '80vh' }}>
        <Paper elevation={12}>
        <HtmlViewer html={response} selections={null} />
        </Paper>
        </div>

        
      </Grid>
    </Grid>
  );
  let show = <Grid container spacing={1} direction="column" alignContent="space-around">
    {menubar}
    {main}
    </Grid>
  return show;
}
export default SASAssistant;
// <HtmlViewer html={response} selections={null} />