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
import tableInfo from '../lib/tableToJson'

async function fetchCurrentSoln (APPENV, session, store) {
  debugger;
  let caslStatements = `

  action fedsql.execdirect /
    query="create table ${APPENV.INPUTLIBNAME}.curr_coln_costs {options replace=true} as
       select a.site, a.product, a.var_cost
       from ${APPENV.INPUTLIBNAME}.${APPENV.CURRENTSOLUTION} as a
       where a.Close = 0
       ";
  run;

		action table.fetch r=result / to= 1000
			table= {caslib = '${APPENV.INPUTLIBNAME}' name = 'curr_coln_costs'};
		run;

		f = findTable(result);
		print f;

		send_response(result);
		run;
	`

  let payload = {
      action: 'sccasl.runCasl',
      data  : {code: caslStatements}
  }
  debugger;
  let r = await store.runAction(session, payload);
  return(tableInfo(r, 'Fetch'))
}



export default fetchCurrentSoln;
