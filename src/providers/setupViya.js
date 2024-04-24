/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import { initStore } from "@sassoftware/restaf";
// import { setupAssistant } from "@sassoftware/viya-assistantjs";
async function setupViya(appEnv, logonPayload) {
  let store = initStore({ casProxy: true });

  console.log(logonPayload);
  await store.logon(logonPayload);

  let appOptions = {
    logonPayload: logonPayload,
    appEnv: appEnv,
    store: store,
    homeNotesText: hometext()
  };
  debugger;

  let config = {
    openai: {
      viya: true,
      devMode: (appEnv.DEVMODE === 'TRUE'),
      provider: 'openai',
      model: appEnv.OPENAI_MODEL,
      credentials: {
        key: appEnv.OPENAI_KEY,
      },
      assistantid: appEnv.OPENAI_ASSISTANTID,
      assistantName: appEnv.OPENAI_ASSISTANTNAME,
      threadid: appEnv.OPENAI_THREADID,
      vectorStoreid: appEnv.OPENAI_VECTORSTOREID,
      domainTools: { 
        tools: [],
        functionList: {},
        instructions: ""
      },
      viyaConfig: {
        logonPayload: logonPayload,
      },
      retrieval: true,
      code: true
    },
    azureai: {
      viya: true,
      devMode: (appEnv.DEVMODE === 'TRUE'),
      provider: 'azureai',
      model: appEnv.AZUREAI_MODEL,
      credentials: {
        key: appEnv.AZUREAI_KEY,
        endPoint: appEnv.AZUREAI_ENDPOINT
      },
      assistantid: appEnv.AZUREAI_ASSISTANTID,
      assistantName: appEnv.AZUREAI_ASSISTANTNAME,
      threadid: appEnv.AZUREAI_THREADID,
      vectorStoreid: appEnv.AZUREAI_VECTORSTOREID,
      domainTools: { 
        tools: [],
        functionList: {},
        instructions: "",
        replace: false,
      },
      viyaConfig: {
        logonPayload: logonPayload,
      },
      retrieval: false,
      code: true
    }
  };

  console.log(config);
 
  appOptions.config = config;
  
  // for default home page
  debugger;
  /*
  if (appEnv.HOMENOTES != null) {
    let p = {
      url: appEnv.APPENV_HOMENOTES,
     // withCredentials: true,
    };
    let r = await store.request(p);
    appOptions.homeNotesText = r.data;
    console.log(appOptions.homeNotesText);
  }
  */
  let progressb = progress.bind(null, store);
  let onCompletionb = onCompletion.bind(null, store);
  appOptions.classes = {};

  appOptions.jobStatus = { progress: progressb, onCompletion: onCompletionb };
  console.log(appOptions);
  return appOptions;
}

function progress(store, data, JobId) {
  let today = new Date();
  let time = today.toISOString();
  let jobStatus = {
    log: `Progress Status: ${JobId} ${data}`,
    timeStamp: time,
  };
  store.setAppData("_jobStatus", jobStatus);
  return false;
}
function onCompletion(store, err, status, JobId) {
  let today = new Date();
  let time = today.toISOString();
  let jobStatus = {
    log: err
      ? `Completion Error: ${JobId} failed. ${err}`
      : `Completion Status: ${JobId}:  ${status.data}`,
    timeStamp: time,
  };
  store.setAppData("_jobStatus", jobStatus);
  return false;
}

function hometext () {
  return `
  <h1> AI Assistant for Viya based on Assistant API from openai and azureai</h1>

  <h1>
  With <a href="https://sassoftware.github.io/restaf-demos"> @sassoftware/viya-assistantjs </a> 
    build your first AI Assistant for SAS Viya in 30 minutes
  </h1>
  
  <h2> Examples of AI Assistant for Viya</h2>
  
  Select Assistant from the menu
    <ul>
      <li> OpenAI Assistant+cas</li>
      <li> AzureAI Assistant+cas</li>
      <li> OpenAI Assistant+compute</li>
      <li> AzureAI Assistant+compute</li>
    </ul>
  
  
  <h2>Key features of the assistant</h2>
  <ul> 
    <li> Supports both openai Assistant and azureai Assistant.</li>
    <li> Upload files to use with the  retrieval tool(azureai does not support retrieval yet)</li>
    <li> Use the code interpreter tool to run python code</li>
    <li> Integration with Viya
      <ul>
        <li> Custom tools to access data from SAS Viya (libs, tables and data)</li>
      </ul>
    </li>
  </ul>
  </div>  
   
  
  <h2> Sample Code </h2></g2>
  
  <pre>
    import * as readline from 'node:readline/promises';
    import { stdin as input, stdout as output } from 'node:process';
    import { setupAssistant, runAssistant } from '@sassoftware/viya-assistantjs';
    
    import getToken from './getToken.js';
    let { host, token } = getToken();
    
    let config = {
      provider: 'azureai', // Depending on who your account is with
      model: process.env.AZUREAI_MODEL, // model name
      credentials: {
        key: process.env.AZUREAI_KEY, // obtain from provider
        endPoint: process.env.AZUREAI_ENDPOINT, // obtain from provider
      },
      // leave the next 4 items as is - explained in the document
      assistantid: 'NEW', //always create a new assistant
      assistantName: 'SAS_ASSISTANT_DEMO',
      threadid: 'NEW', // always create a new thread
      domainTools: {
        tools: [],
        functionList: {},
        instructions: '',
        replace: false,
      },
    
      // fill in the host and token to authenticate to Viya
      // set the source to cas or compute.
      // if you want to run the AI assistant without Viya set source to none
      viyaConfig: {
        logonPayload: {
          authType: 'server',
          host: host, // viya url - https://myviyaserver.acme.com
          token: token, // viya token  - obtained from sas-viya auth login|loginCode
          tokenType: 'bearer',
        },
        source: 'cas',
      },
      code: true,
      retrieval: false,
    };
    
    // Add custom tool to the assistant
    // This is ultimately the way you want to use
    // the assistant to run your custom code
    
    let tools = [
      {
        type: 'function',
        function: {
          name: 'myuniversity',
          description: 'verify the specified course is available',
          parameters: {
            properties: {
              course: {
                  type: 'string',
                  description: 'the name of the course',
                },
              },
              type: 'object',
              required: ['course'],
            },
          },
      },
    ];
    
    // handler for the custom tool
    async function myuniversity(params, appEnv) {
      let { course } = params;
      const courseList = ['math', 'science', 'english', 'history', 'art'];
      if (courseList.includes(course)) {
        return course + ' is available';
      } else {
        return course + 'is not available';
      }
    }
    // instructions for the custom tool
    let instructions = 'check and see if requested course is available';
    
    // add the definitions to te config
    config.domainTools = {
      tools: tools,
      functionList: { myuniversity: myuniversity },
      instructions: instructions,
      replace: false,
    };
    
    chat(config)
      .then((r) => console.log('done'))
      .catch((err) => console.log(err));
    
    async function chat(config) {
      //Setup assistant
      let gptControl = await setupAssistant(config);
    
      // create readline interface and chat with user
      const rl = readline.createInterface({ input, output });
    
      // process user input in a loop
      while (true) {
        let prompt = await rl.question('>');
        // exit session
        if (prompt.toLowerCase() === 'exit' || prompt.toLowerCase() === 'quit') {
          rl.close();
          break;
        }
        // let assistant process the prompt
        let promptInstructions = ' ';
        try {
          // run prompt
          let response = await runAssistant(gptControl, prompt, promptInstructions);
          console.log(response);
        } catch (err) {
          console.log(err);
        }
      }
    }
  
  </pre>
  
`;
}
export default setupViya;