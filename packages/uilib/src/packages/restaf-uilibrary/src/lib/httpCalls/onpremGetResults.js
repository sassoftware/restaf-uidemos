/*
* Copyright © 2019, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/

async function onpremGetResults(path, data, serverInfo){
    let caslStatements = caslFunctions();
    let _appEnv_ = {
        path:  path, 
        model: serverInfo.model, 
        table: serverInfo.table
     };
     if (path === 'describe') {
         _appEnv_.idvars = data
     } else {
         _appEnv_.filter = data;
     }
     caslStatements = jsonToDict( _appEnv_, '_appEnv_') + ' ' + caslStatements;

     let payload = {
        code: caslStatements
     }
     let r = serverInfo.store.runAction(serverInfo.session, payload);
     let casResults = r.items('results', 'casResults').toJS();
     return casResults;
}

function caslFunctions () {
    let caslStatements = `
    
/*
cas mycas;
proc cas;
 _appEnv_ = {
   path = 'describe' 
   model={ caslib='public', name='opioidModel1'}, 
   table={ caslib='public', name='cms_opioid_sdoh'}
   filter='state eq "AL" and year_num eq 2010',
   idvars={'state', 'year'}
};

*/
r = {Error= 'No path'};
print _appEnv_;
if ( _appEnv_.path eq 'describe') then do;
   r = selectionLists(_appEnv_.idvars, _appEnv_.table.caslib, _appEnv_.table.name);
end;
else do;
  r =  runDataStepScoreCode(_appEnv_.model, _appEnv_.table, _appEnv_.filter);
end;

result = {casResults = r};
print result;
send_response(result);

function selectionLists(idvars,caslib, name);
 
    s = checkAndLoadTable(caslib, name);
    if ( s ne 0 ) then do;
      results = {Errors: 'Unable to access ' ||caslib||'.'||name};
      return results;
    end;

    do k over idvars;
       r  = _getValues(k, caslib, name);
       results[k] = r;
    end;
    
    return results;    
end;

function _getValues(id, caslib, name) ;
            
    action table.dropTable/
      caslib='casuser' name='dtemp1' quiet=TRUE;
    
    action table.deleteSource status=src /
      caslib='casuser' source= 'dtemp1.sashdat' quiet=TRUE;
    
    action simple.groupby result=r status=rc/
        aggregator = 'N'
        inputs     = {id}
        table      = {caslib=caslib name=name}
        casout     = {caslib='casuser' name='dtemp1'}
    ;
    action table.fetch result=r/
        table={caslib='casuser' name='dtemp1'} 
        sortby={{name=id,  order='ascending'}};
    result = r.Fetch[,2];
    return result;
    end;

function runDataStepScoreCode( model, table, filter);

    s = checkAndLoadTable(table.caslib, table.name);
    if ( s ne 0 ) then do;
        results = {Errors: 'Unable to access ' ||table.caslib||'.'||table.name};
        return results;
        end;

    s = checkAndLoadTable(model.caslib, model.name);
    if ( s ne 0 ) then do;
        results = {Errors: 'Unable to access ' ||model.caslib||'.'||model.name};
        return results;
        end;
    wherex = dictTowhere(filter);
    wherex = table.caslib||'.'||table.name||'(where=('||wherex||'));';
    print wherex;
  
    action datastep.runCode r=result status=rc/
      single='yes'
      code = 'data casuser.input; set ' || wherex||'run;';
    

    action datastep.runcodetable r = result/
        single='YES'
        codeTable= {caslib=model.caslib name=model.name };

    action table.fetch r = result /
        table={caslib='casuser' name='output'};

    rows = resultsToDict(result.Fetch);
    return rows;
end;



function checkAndLoadTable(caslib, name);
           
   /* 
    * Verify that the table is loaded
    */
    action table.tableExists r=result/ 
        caslib = caslib 
        name  = name; 
    
    /*
     * if necessary load the table
     */

    if ( result.exists eq 0) then do;
        print 'Loading ' name;
        action table.loadTable status=status/ 
            caslib = caslib 
            source = name || '.sashdat' 
            casout={caslib= caslib name=name}; 
        return status.statusCode;
    end; 
    else do;
        print name '  preloaded';
        return 0;
    end;
end;

function dictToWhere(filter);
    where ='';
    andbit='  ';
	do k,v over filter;
		if (isString(v) ) then do;
			where = where || andbit || k ||  ' eq ' || '"'||v||'"';
        end; 
        else do;
            where = where || andbit || k ||  ' eq ' || v ;
        end;
    andbit =' and ';
	end;
return where;
end;

function resultsToDict(r);
    casResults = {};
    i = 1;
    do row over r;
    casResults[i] = row;
    i = i + 1;
    end;
    return casResults;
end;

    `;
    return caslStatements;
}
/*
 * Copyright © 2019, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
*/


/**
 * Produce a string with casl dictionary suitable for inclsion in casl code
 * 
 * @module jsonToDict
 * @param {object} obj - the JS object of interest
 * @param {string} name - the name to assign to the dictionary
 * 
 * @returns {string} returns the string containing the casl dictionary
 * 
 * @example
 * 
 *  obj = {x: 1, b:2, c: ['a','b']};
 *  name ='_appEnv_';
 *  result is a string _appEnv_ = {x=2, b=3, c={"a', "b"}}
 */
 
function jsonToDict (obj, name) {
    let o1;
    if (obj === null) {
        o1 = `{}`;
    } else {
        o1 = (Array.isArray(obj) === true)? handleArray(obj) : handleObject(obj);
    }
    return `${name} = ${o1};`
}
function handleObject(obj) {
    let r    = '{ ';
    let sep =  ' ';
    for (let k in obj) {
        if (Array.isArray(obj[k]) === true) {
            let o = handleArray(obj[k]);
            r = r + sep +  `${k}=` + o ;
        } else {
            let type = typeof obj[k] ;
            if (type === 'object') {
                let o = handleObject(obj[k]);
                r = r + sep +  `${k}=` + o ;
            } else {
                r = r + sep + `${k}=` + ((type === 'string') ? ` "${obj[k]}" ` : `${obj[k]}  `) ;
            }
        }
        sep = ',';
    }
   r = r + '} ';
   return r;
}

function handleArray(obj) {
    let r    = '{';
    let sep =  ' ';
    let size = obj.length;
    for (let k=0; k<size; k++) {
        if (Array.isArray(obj[k]) === true) {
            let o = handleArray(obj[k]);
            r = r + sep +  `${k}=` + o;
        } else {
            let type = typeof obj[k] ;
            if (type === 'object') {
                let o = handleObject(obj[k]);
                r = r + sep  + o ;
            } else {
                r = r + sep +  ((type === 'string') ? ` "${obj[k]}" ` : `${obj[k]}  `) ;
            }
            sep = ',';
        }
    }
   r = r + '}';
   return r;
}
export default onpremGetResults;