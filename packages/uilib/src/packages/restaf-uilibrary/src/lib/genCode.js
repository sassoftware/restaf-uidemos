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
import optCode from './optCode';

function genCode (objType, APPENV) {
	let pgm = optCode(objType, APPENV);
  let caslStatements = `

	action table.save /
		caslib  = '${APPENV.WORKLIBNAME}'
		name    = '${APPENV.OPTABLENAME}'
		replace = TRUE
		table= {
			caslib = '${APPENV.WORKLIBNAME}'
			name   = '${APPENV.OPTABLENAME}'
		};

	action table.loadTable/
		caslib= '${APPENV.WORKLIBNAME}' path= '${APPENV.OPTABLENAME}.sashdat'
		casout= {caslib='${APPENV.WORKLIBNAME}' name='${APPENV.OPTABLENAME}' replace=TRUE};

		/* Drop output tables with silent option */
		action table.dropTable / name='${APPENV.OUTPUTMASTERTABLENAME}' caslib='${APPENV.WORKLIBNAME}' quiet=TRUE;
	  action table.dropTable / name='${APPENV.OUTPUTSITETABLENAME}' caslib='${APPENV.WORKLIBNAME}' quiet=TRUE;
	  action table.dropTable / name='${APPENV.OUTPUTCOSTTABLENAME}' caslib='${APPENV.WORKLIBNAME}' quiet=TRUE;

		/*Calling OptCode */
		loadactionset 'optimization';
		action optimization.runOptmodel /
		code= "${pgm}" printlevel=0;
		run;
		print 'save output table for use with VA reports';

		/* Save and Load data */
		action table.save /
			caslib  = '${APPENV.WORKLIBNAME}'
			name    = '${APPENV.OUTPUTSITETABLENAME}'
			replace = TRUE
			table= {
				caslib = '${APPENV.WORKLIBNAME}'
				name   = '${APPENV.OUTPUTSITETABLENAME}'
			};

		action table.loadTable/
			caslib= '${APPENV.WORKLIBNAME}' path= '${APPENV.OUTPUTSITETABLENAME}.sashdat'
			casout= {caslib='${APPENV.WORKLIBNAME}' name='${APPENV.OUTPUTSITETABLENAME}' replace=TRUE};

		action table.save /
			caslib  = '${APPENV.WORKLIBNAME}'
			name    = '${APPENV.OUTPUTCOSTTABLENAME}'
			replace = TRUE
			table= {
				caslib = '${APPENV.WORKLIBNAME}'
				name   = '${APPENV.OUTPUTCOSTTABLENAME}'
			};

		action table.loadTable/
			caslib= '${APPENV.WORKLIBNAME}' path= '${APPENV.OUTPUTCOSTTABLENAME}.sashdat'
			casout= {caslib='${APPENV.WORKLIBNAME}' name='${APPENV.OUTPUTCOSTTABLENAME}' replace=TRUE};

		datastep.runCode /
			code = "
			data ${APPENV.WORKLIBNAME}.${APPENV.OUTPUTMASTERTABLENAME};
				merge ${APPENV.WORKLIBNAME}.${APPENV.OUTPUTCOSTTABLENAME} ${APPENV.WORKLIBNAME}.${APPENV.OUTPUTSITETABLENAME};
				by site;
			run;
			";
		run;

		action table.save /
			caslib  = '${APPENV.WORKLIBNAME}'
			name    = '${APPENV.OUTPUTMASTERTABLENAME}'
			replace = TRUE
			table= {
				caslib = '${APPENV.WORKLIBNAME}'
				name   = '${APPENV.OUTPUTMASTERTABLENAME}'
			};

		action table.loadTable/
			caslib= '${APPENV.WORKLIBNAME}' path= '${APPENV.OUTPUTMASTERTABLENAME}.sashdat'
			casout= {caslib='${APPENV.WORKLIBNAME}' name='${APPENV.OUTPUTMASTERTABLENAME}' replace=TRUE};

		action table.fetch r=result / to= 1000
			table= {caslib = '${APPENV.WORKLIBNAME}' name = '${APPENV.OUTPUTCOSTTABLENAME}'};
		run;
	`
	return caslStatements;
}
export default genCode;
