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
  let services = await store.addServices("casManagement", "compute");

  let appOptions = {
    logonPayload: logonPayload,
    appEnv: appEnv,
    store: store,
    homeNotesText: hometext()
  };
  debugger;
  let config = {
    openai: {
      source: appEnv.SOURCE,
      provider: appEnv.OPENAI_PROVIDER,
      model: appEnv.OPENAI_MODEL,
      credentials: {
        key: appEnv.OPENAI_KEY,
      },
      assistantid: appEnv.OPENAI_ASSISTANTID,
      assistantName: appEnv.OPENAI_ASSISTANTNAME,
      threadid: appEnv.OPENAI_THREADID,
      domainTools: { 
        tools: [],
        functionList: {},
        instructions: "",
        replace: false,
      },
      viyaConfig: {
        logonPayload: logonPayload,
        source: appEnv.SOURCE
      },
      retrieval: true
    },
    azureai: {
      source: appEnv.SOURCE,
      provider: appEnv.AZUREAI_PROVIDER,
      model: appEnv.AZUREAI_MODEL,
      credentials: {
        key: appEnv.AZUREAI_KEY,
        endPoint: appEnv.AZUREAI_ENDPOINT
      },
      assistantid: appEnv.AZUREAI_ASSISTANTID,
      assistantName: appEnv.AZUREAI_ASSISTANTNAME,
      threadid: appEnv.AZUREAI_THREADID,
      domainTools: { 
        tools: [],
        functionList: {},
        instructions: "",
        replace: false,
      },
      viyaConfig: {
        logonPayload: logonPayload,
        source: appEnv.SOURCE
      },
      retrieval: false
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
  # Examples of Assistant for Viya

  The intent here is to demonstrate how to use the @sassoftware/viya-assistantjs library to build custom assistants for SAS Viya.
  <a href="https://sassoftware.github.io/restaf">restaf</a>

  The technology used are:
  - SAS Viya REST APIs to create custom tools
    - Visit <a href="https://sassoftware.github.io/restaf/">@sassoftware/restaf, @sassoftware/restaflib and @sassofware/restafeditor</a> for more information

  This  <a href="https://sassoftware.github.io/restaf-demos/tutorial-gettingStarted.html">starter app </a> is a good place to start to see how you can start using this library in a few minutes.
  Also see <a href="https://sassoftware.github.io/restaf-demos/tutorial-customTools.html">this example on how to extend this with your own actions/toolsd</a>

  Visit this site  for <a href="https://sassoftware.github.io/restaf-demos/">full documentation</a>

 The demo application one assistant with 4 configurations

  1. OpenAI Assistant+cas - this uses the openai Assistant API. It supports retrieval, code interpreter and custom tools to make calls to Viya.
  2. AzureAI Assistan+cas - this uses the azureai Assistant API. It supports code interpreter and custom tools to make calls to Viya. Retrieval is not avaialable yet

  3. OpenAI Assistant+compute - this uses the openai Assistant API. It supports retrieval, code interpreter and custom tools to make calls to Viya.
  4. AzureAI Assistant+compute - this uses the azureai Assistant API. It supports code interpreter and custom tools to make calls to Viya. Retrieval is not avaialable yet
  
  These assistants are designed to work with Viya. They can be used to
  
  - retrieve data from a table
  - list reports
  - Attach file to the assistant and use it as a retrieval tool
  - Run SAS code

## @sassoftware/viya-assistantjs

@sassoftware/viya-assistantjs is a JavaScript library(esm) with the following
key features

1. Write your first assistant in a few minutes.
2. Supports both openai Assistant and azureai Assistant.
3. Uses the azureai API pattern to support openai Assistant.
This allows switching between the two with simple configuration changes.
4. It comes with a builtin tools for integration with Viya
    - listing reports, librefs
    - listing tables in a specified library
    - retrieving data from a specified table
5. Append to/or replace the builtin tools with your own tools
6. Run the library in nodejs or browser enviroment - usually a react application
7. Comes with documentation to make the journey less painful

## What is the ASSISTANT?

The explanation is from
<a href="https://platform.openai.com/docs/assistants/overview?context=with-streaming">openai</a>

The Assistants API allows you to build AI assistants within your own
applications.

An Assistant has instructions and can leverage models, tools,
and knowledge to respond to user queries. The Assistants API currently supports
three types of tools: Code Interpreter, Retrieval, and Function calling.

You can explore the capabilities of the Assistants API using the
Assistants playground or by building a step-by-step integration application

*Overview*
A typical integration of the Assistants API has the following flow:

Create an Assistant by defining its custom instructions and picking a model.
If helpful, add files and enable tools like Code Interpreter, Retrieval, and
Function calling.

1. Create a Thread when a user starts a conversation.
2. Add Messages to the Thread as the user asks questions.
3. Run the Assistant on the Thread to generate a response by calling the model
 and the tools.

## Why use Assistant API?

1. The conversation thread is maintained by the system.
2. The code interpreter tool can generate and run python code
3. The retrieval tool works with files that have been uploaded
   and attached to an instance of the assistant.
   I think of it as an easy way to create a RAG.

  a. Note: Unfortunately I have not been able to find a version on azureai
  that supports retrieval. Hopefully this will be resolved soon
  <a href="https://github.com/Azure/azure-sdk-for-js/issues/28550">issue</a>



## Usage Notes

Please refer to the documentation and tutorials
for details on using this library
See the gettingStarted tutorial to begin programming.
`
}
export default setupViya;
