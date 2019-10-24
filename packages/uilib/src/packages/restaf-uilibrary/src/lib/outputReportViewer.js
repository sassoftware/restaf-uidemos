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

 async function loadOutputVAReport (store, reportServices, APPENV, host) {
    debugger;
    let reportUri = await updateOutputReport(store, reportServices, APPENV);

    let options = "&appSwitcherDisabled=true&reportViewOnly=true&printEnabled=true&sharedEnabled=true&informationEnabled=true&commentEnabled=true&reportViewOnly=true";

    let href = `${host}/SASReportViewer/?reportUri=${reportUri}${options}`;
   
    return href;
}

async function updateOutputReport (store, reportServices, APPENV) {
    let {reports, reportTransforms } = reportServices;

    debugger;

    let reportsList = await getReport(store, reports, `${APPENV.OUTPUTREPORTNAME}`);
    if (reportsList === null) {
        throw {Error: `${APPENV.OUTPUTREPORTNAME} not found`}
    }

    let reportUri = reportsList.itemsCmd(reportsList.itemsList(0), 'self', 'link', 'uri');

    if (APPENV.REPORTGEN === 'copy') {
      let oldReport = await getReport(store, reports, `${APPENV.OUTPUTREPORTNAME}_Temp`);
      if (oldReport !== null) {
        await store.apiCall(oldReport.itemsCmd(oldReport.itemsList(0), 'delete'));
      }

      let data = {
          "inputReportUri"  : `${reportUri}`,
          "resultReportName": `${APPENV.OUTPUTREPORTNAME}_Temp`,
          "dataSources"     : [
          {
            "namePattern": "serverLibraryTable",
            "purpose"    : "replacement",
            "server"     : "cas-shared-default",
            "library"    : `${APPENV.WORKLIBNAME}`,
            "table"      : `${APPENV.OUTPUTMASTERTABLENAME}`
          },
          {
            "namePattern": "serverLibraryTable",
            "purpose"    : "original",
            "server"     : "cas-shared-default",
            "library"    : `${APPENV.INPUTLIBNAME}`,
            "table"      : `${APPENV.OUTPUTMASTERTABLENAME}`
          }
        ]
      }
          debugger;
  

      let qs = {
          failOnDataSourceError: false,
          useSavedReport       : true,
          saveResult           : true
      }

      let p = {
          qs  : qs,
          data: data
      }
      let changeData = reportTransforms.links('createDataMappedReport');
      let newReport = await store.apiCall(changeData, p);

      let id = newReport.items('resultReport', 'id');
      debugger;
      reportUri = `/reports/reports/${id}`;
    }
    return reportUri;
}

async function getReport (store, reports, name) {
    let payload = {
      qs: {
          filter: `eq(name,'${name}')`
      }
    }
    let reportsList = await store.apiCall(reports.links('reports'), payload);
    return (reportsList.itemsList().size === 0) ? null : reportsList;
}

export default loadOutputVAReport;
