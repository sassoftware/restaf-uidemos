// import { caslRun } from '@sassoftware/restaflib';
// import saveAndPromote  from './saveAndPromote.js';
async function submitCasl(src, args, appEnv, useCommons) {
  const { caslRun } = appEnv.builtins.restaflib;
  const { store, session } = appEnv;
  try {
    //src = src;
    let nf  = `
    function checkAndLoadTable2(caslib, name);
   action table.tableExists result=r status=s/    
            caslib = caslib   
            name  = name;
 
   if (r.exists ne 1) then do;
    table.loadtable result=r status=s/
            caslib=caslib casout={caslib= caslib name=name replace=TRUE}
            path=name||'.sashdat';
    end;
    action table.tableExists result=r status=s/    
            caslib = caslib    
            name  = name; 
   rc= false;
   if (r.exists > 0 ) then do;
     rc = true;
  end;
   return rc;
end;`;
src = src + nf;

   
    let r = await caslRun(store, session, src, (args == null ? {} : args), 
    (useCommons == null ?  false : useCommons));

    let status = { statusCode: 0, msg: null };
    let results;
    if (r.results.casResults == null) {
      status = {statusCode:2, msg:'Missing casResults in response'};
      results = {};
    } else {
      results = r.results.casResults;
    }
    return { status, results, output: r};
    
  } catch (err) {
   
    console.log(err);
    return { status: { statusCode: 2, msg: 'See console for error messages' }, results: {}, output: null };  
  }
}
export default submitCasl;