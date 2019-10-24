import tableInfo from '../lib/tableToJson'

async function loadParamsData (APPENV, session, store){
 let caslStatements = `
   action table.dropTable / name='${APPENV.OPTABLENAME}' caslib='${APPENV.WORKLIBNAME}' quiet=TRUE;
   action table.dropTable / name='${APPENV.COSTTABLENAME}' caslib='${APPENV.WORKLIBNAME}' quiet=TRUE;
   action table.dropTable / name='${APPENV.SITETABLENAME}' caslib='${APPENV.WORKLIBNAME}' quiet=TRUE;
   action table.dropTable / name='${APPENV.INPUTMASTERTABLENAME}' caslib='${APPENV.WORKLIBNAME}' quiet=TRUE;


   /*Running Some Data Step Code to read input data into work library */

   datastep.runCode /
     code = "
     data ${APPENV.WORKLIBNAME}.${APPENV.SITETABLENAME};
       set ${APPENV.INPUTLIBNAME}.${APPENV.SITETABLENAME};
     run;
     ";
   run;
   datastep.runCode /
     code = "
     data ${APPENV.WORKLIBNAME}.${APPENV.OPTABLENAME};
       set ${APPENV.INPUTLIBNAME}.${APPENV.OPTABLENAME};
     run;
     ";
     run;
   datastep.runCode /
     code = "
     data ${APPENV.WORKLIBNAME}.${APPENV.COSTTABLENAME};
       set ${APPENV.INPUTLIBNAME}.${APPENV.COSTTABLENAME};
     run;
     ";
   run;
   datastep.runCode /
     code = "
     data ${APPENV.WORKLIBNAME}.${APPENV.INPUTMASTERTABLENAME};
       set ${APPENV.INPUTLIBNAME}.${APPENV.INPUTMASTERTABLENAME};
     run;
     ";
   run;


   /*Finally fetching the Parameters Table*/
   action table.fetch r=result /to= 1000
     table= {caslib= '${APPENV.WORKLIBNAME}'  name= '${APPENV.OPTABLENAME}'};
   run;

   send_response(result);
   run;

 `

 let payload = {
     action: 'sccasl.runCasl',
     data  : {code: caslStatements}
 }
 debugger;
 let r1 = await store.runAction(session, payload);
 let paramTable = [];
 paramTable.push(tableInfo(r1, 'Fetch'))
 debugger;
 let caslStatements2 = `
   action fedsql.execdirect /
     query="create table ${APPENV.WORKLIBNAME}.facilities {options replace=true} as
        select a.facility_name
        from ${APPENV.WORKLIBNAME}.${APPENV.SITETABLENAME} as a
        ";
   run;

   /*Finally fetching the Facilities Parameters Table*/
   action table.fetch r=result / to= 1000
     table= {caslib= '${APPENV.WORKLIBNAME}'  name= 'facilities'};
   run;

   send_response(result);
   run;

 `
 debugger;

 payload = {
     action: 'sccasl.runCasl',
     data  : {code: caslStatements2}
 }

 let r2 = await store.runAction(session, payload);
 paramTable.push(tableInfo(r2, 'Fetch'))
 debugger;
 let caslStatements3 = `
   action fedsql.execdirect /
     query="create table ${APPENV.WORKLIBNAME}.viable_facilities {options replace=true} as
        select a.facility_name, a.Product_Name
        from ${APPENV.WORKLIBNAME}.${APPENV.COSTTABLENAME} as a
        where a.viable_flg = 1
        ";
   run;

   /*Finally fetching the Facilities Parameters Table*/
   action table.fetch r=result /to= 1000
     table= {caslib= '${APPENV.WORKLIBNAME}'  name= 'viable_facilities'};
   run;

   send_response(result);
   run;

 `
 
 payload = {
     action: 'sccasl.runCasl',
     data  : {code: caslStatements3}
 }
 debugger;
 let r3 = await store.runAction(session, payload);
 paramTable.push(tableInfo(r3, 'Fetch'))
 debugger;
 return paramTable;
}

export default loadParamsData;
