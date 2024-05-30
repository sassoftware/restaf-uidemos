/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import  OpenAI from 'openai';
//import restafedit from '@sassoftware/restafedit';

async function gptPrompt(apiKey, userRequest, appEnv) {
  const configuration = { apiKey: apiKey, dangerouslyAllowBrowser: true };
  debugger;
  const openai = new OpenAI(configuration);
  debugger;
  const configFunctionSpec = {
    name: "getConfig",
    description:
      "return the configuration for a table and source as a JSON object",
    parameters: {
      properties: {
        source: {
          type: "string",
          description: "The source is cas",
        },
        table: {
          type: "string",
          description:
            "The table to setup. The form of the table is casuser.cars",
        },
        keys: {
          type: "string",
          description: "The form of the keys is Make,Model,Type",
        },
        columns: {
          type: "string",
          description:
            "Keep  only these columns. The form of the columns is Make,Model,Type",
        },
      },
      type: "object",
      required: ["source", "table"],
    },
  };
  const getDataFunctionSpec = {
    name: "getData",
    description:
      "Get data from table in source. The form of the table is casuser.cars",
    parameters: {
      properties: {
        source: {
          type: "string",
          description: "The source is cas",
        },
        table: {
          type: "string",
          description:
            "The table to setup. The form of the table is casuser.cars",
        },
        count: {
          type: "integer",
          description:
            "Get this many rows. If count is 0, then get all rows. Default is 10",
        },
      },
      type: "object",
      required: ["source", "table"],
    },
  };
  try {
    let createArgs = {
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are a prompt manager for Viyafsedit" },
      ],
      functions: [configFunctionSpec, getDataFunctionSpec],
    };
    if (userRequest !== null && userRequest.trim().length > 0) {
      let newPrompt = {role: 'user', content: userRequest};
      createArgs.messages = createArgs.messages.concat([newPrompt]);
    }
    console.log(createArgs);
    let funcObject = {getConfig: getConfig, getData: getData};
    let completion = await openai.chat.completions.create(createArgs);
    debugger;
    console.log(completion);
    const completionResponse = completion.choices[0].message;
    debugger;
    if (completionResponse.content) {
      console.log(completionResponse.content);
      return completionResponse.content;
    } else if (completionResponse.function_call) {
      const fname = completionResponse.function_call.name;
      const params = JSON.parse(completionResponse.function_call.arguments);
      console.log(params);
      return funcObject[fname](params.source, params.table, params.keys);
    }
  } catch (error) {
    debugger;
    return error;
  }
}

async function getConfig(source, table, keys, columns) {
  console.log(`Setup ${table} in ${source}`);
  return {
    source: source,
    table: table,
    keys: keys == null ? [] : keys.split(","),
    columns: columns == null ? [] : columns.split(","),
  };
}
async function getData(source, table, count) {
  console.log(`Get data from ${table} in ${source}`);

  return {
    source: source,
    table: table,
    count: count == null ? 10 : count,
  };
}
export default gptPrompt;
