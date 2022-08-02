/*
* Copyright © 2019, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/

function dsScoreFunctions () {
    let casl = `
    /* 
    * Copyright © 2019, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved. 
    * SPDX-License-Identifier: Apache-2.0 
    */ 
     
             
    /* 
            cas mycas;  
            proc cas;  
            _appEnv_ = {  
            path = 'score'   
                model={ caslib='public', name='MODEL_CLUSTER_SDOH1'},   
                table={ caslib='public', name='CMS_OPIOID_SDOH'}  
                filter={SUM_EST_AGE_ADJUSTED_DEATHS_NUM =4000 },  
                filterisInput = true, 
                idvars={'state', 'year'}  
            };  
       */ 
             
            r = {Error= 'No path'};  
            print _appEnv_;  
            if ( _appEnv_.path eq 'filters') then do;  
                r = selectionLists(_appEnv_.idvars, _appEnv_.table.caslib, _appEnv_.table.name);  
                end;  
            else if ( _appEnv_.path eq 'contents') then do; 
               r = contents(_appEnv_.table.caslib, _appEnv_.table.name); 
               end; 
            else if (_appEnv_.path eq 'describe') then do;
               r = fetchData( _appEnv_.filter, _appEnv_.table);
               end;
            else do;  
               r =  runDataStepScoreCode(_appEnv_.model, _appEnv_.table, _appEnv_.filter, _appEnv_.filterisInput);  
            end;  
             
            result = {casResults = r};  
            /* print result; */ 
            send_response(result); 
     
            /*-----------------------------------------*/ 
            /* Returns contents of the specified table */ 
            /*-----------------------------------------*/ 
     
            function contents(caslib, name) ; 
                s = checkAndLoadTable(caslib, name);  
                    if ( s ne 0 ) then do;  
                    results = {Errors: 'Unable to access ' ||caslib||'.'||name};  
                    return results;  
                    end;  
                table.columnInfo r = result / 
                     table = {caslib=caslib , name=name}; 
                columns ={{Column='_Index_',ID=0,Type='double',RawLength=5,FormattedLength=5,NFL=0,NFD=0}}; 
                i = 2; 
                do c over result.columninfo; 
                   columns[i] = c; 
                   i = i + 1; 
                end; 
                return columns; 
            end; 
             
            /*------------------------------------------*/ 
            /* Returns unique values                   */ 
            /*-----------------------------------------*/ 
     
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
     
            /*------------------------------------------*/
            /* get a record                             */
            /*------------------------------------------*/
            function fetchData(filter, table);
                s = checkAndLoadTable(table.caslib, table.name);  
                if ( s ne 0 ) then do;  
                    results = {Errors: 'Unable to access ' ||table.caslib||'.'||table.name};  
                    return results;  
                    end;  
                wherex = dictTowhere(filter);  
                wherex = table.caslib||'.'||table.name||'(where=('||wherex||'));'; 
                
                destroyTable('casuser', 'input'); 

                action datastep.runCode r=result status=rc/  
                  single='yes'  
                  code = 'data casuser.input; set ' || wherex||'run;'; 
                  
                action table.fetch r = result /  
                   table={caslib='casuser' name='input'};  
           
                // rows = resultsToDict(result.Fetch);  
                return results;  

            end;

            /*------------------------------------------*/ 
            /* score                                    */ 
            /*------------------------------------------*/ 
            function runDataStepScoreCode( model, table, filter,filterIsInput);  
             
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
                destroyTable('casuser', 'input');  
     
                if  (filterIsInput eq false) then do; 
                    wherex = dictTowhere(filter);  
                    wherex = table.caslib||'.'||table.name||'(where=('||wherex||'));';  
                    
                    
                    action datastep.runCode r=result status=rc/  
                    single='yes'  
                    code = 'data casuser.input; set ' || wherex||'run;';  
                end;  
                else  do ; 
                   
                    argsToTable(filter, 'casuser', 'input'); 
                   
                end; 
                    
                 
             
                destroyTable('casuser', 'output');  
               
           
     
                action datastep.runcodetable r = result/  
                    single='YES'  
                    codeTable= {caslib=model.caslib name=model.name}  
                    casout = {caslib='casuser' name='output'}  
                    table = {caslib='casuser' name='input'};  
             
                action table.fetch r = result /  
                    table={caslib='casuser' name='output'};  
             
                rows = resultsToDict(result.Fetch);  
                return rows;  
            end;  
             
             
            function destroyTable(caslib,name);  
                action table.dropTable/  
                caslib=caslib name=name quiet=TRUE;  
                     
                action table.deleteSource status=src /  
                caslib=caslib source= name||'.sashdat' quiet=TRUE;  
                 
            return true;  
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
                
                    action table.loadTable status=status/   
                        caslib = caslib   
                        source = upcase(name) || '.sashdat'   
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
          
            function argsToTable(_arg_, caslib, name );  
                action table.droptable/ 
                  caslib=caslib name=name quiet=TRUE; 
                i = 1; 
                do key,obj over _arg_; 
                    columns[i] = key; 
                    row[i] = obj; 
                    if ( isString(obj) ) then 
                       type[i] = 'varchar';  
                    else if ( isInteger(obj) ) then  
                       type[i] = 'int';  
                    else type[i] = 'double'; 
                    i = i + 1; 
                    end;   
               
                data1 = newTable('data1', columns, type, row );  
                
                saveresult data1 casout=name caslib=caslib replace;  
            end;  
      
        `;
    return casl; 
}
export default dsScoreFunctions;