/*
 * ------------------------------------------------------------------------------------
 *   Copyright (c) SAS Institute Inc.
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 * ---------------------------------------------------------------------------------------
 *
 */
/**
 * @description Copy a report with new name
 * @async
 * @module copyReport
 * @param {string} sourceReport 
 * @category builtins
 * @param {*} source report name
 * @param {*} target report name
 * @param {*} table to be replaced({caslib: c, name: n}})
 * @param {*} table to be replaced with ({caslib: c, name: n}})
 * @param {*} appEnv - appEnv
 * @returns {promise}  - uri of new report
 * @example
 *  rc = await appEnv.builtins.copyReport('MLOPTWITHKNN',
                 `MLOPTWITHKNN${appEnv.appControl.user}`,
                 {caslib:'PUBLIC', name:'KNN_FLAG'},
                 {caslib:'CASUSER', name:'KNN_FLAG'},
                 appEnv);
 */

async function copyReport(sourceReport, targetReport, sourceTable, targetTable, appEnv) {
  
  let reportUri = await updateOutputReport(sourceReport, targetReport, sourceTable, targetTable, appEnv);

  return {reportName: targetReport, reportUri: reportUri};
}

async function updateOutputReport(sourceReport, targetReport, sourceTable, targetTable, appEnv) {
  let { store } = appEnv;
  let { reports, reportTransforms } = await store.addServices('reports', 'reportTransforms');
  
  let reportsList = await getReport(store, reports, sourceReport);
  if (reportsList === null) {
    // eslint-disable-next-line no-throw-literal
    throw `Report ${sourceReport} not found`;
  }
  let reportUri = reportsList.itemsCmd(reportsList.itemsList(0), 'self', 'link', 'uri');

  reportsList = await getReport(store, reports, targetReport);
  if (reportsList !== null) {
    let oldReport = await getReport(store, reports, targetReport);
    if (oldReport !== null) {
      await store.apiCall(oldReport.itemsCmd(oldReport.itemsList(0), 'delete'));
    };
  }

  let s = [
    {
      namePattern: "serverLibraryTable",
      purpose: "replacement",
      server: "cas-shared-default",
      library: targetTable.caslib,
      table: targetTable.name 
    },
    {
      "namePattern": "serverLibraryTable",
      "purpose": "original",
      "server": "cas-shared-default",
      "library": sourceTable.caslib,
      "table": sourceTable.name
    }
  ];
  let data = {
    "inputReportUri": reportUri,
    "resultReportName": targetReport,
    dataSources: s

   }
  
 // console.log(data);

  let qs = {
    failOnDataSourceError: false,
    useSavedReport: true,
    saveResult: true
  };

 

let py = {
    qs: qs,
    data: data
    
    
  };
  

  let changeData = reportTransforms.links('createDataMappedReport');
  debugger
  try {
    let newReport = await store.apiCall(changeData, py);
    let id = newReport.items('resultReport', 'id');
    
    reportUri = `/ reports / reports / ${ id }`;
    return reportUri;
  } catch (err) {
    
    console.log(err);
    return null;
  }
}

async function getReport(store, reports, name) {
  let payload = {
    qs: {
      filter: `eq(name, '${name}')`
    }
  }
  let reportsList = await store.apiCall(reports.links('reports'), payload);
  return (reportsList.itemsList().size === 0) ? null : reportsList;
}

export default copyReport;


 