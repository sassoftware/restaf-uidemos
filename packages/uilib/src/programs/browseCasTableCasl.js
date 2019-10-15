/*
* Copyright © 2019, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/

function browseCasTableCasl() {
    let code =`
    results = getData(_args_.caslib, _args_.name , _args_.from, _args_.count,  _args_.format);   
    send_response({casResults = results});  
        
    function getData(caslib, name, from, count, format) ;    
     
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
            action table.loadTable status=rc/ 
               caslib = caslib 
               source = upcase(name) || '.sashdat' 
               casout={caslib= caslib name=name};    
            if ( rc.severity ne 0 ) then do; 
               return {rc=rc}; 
            end; 
        end; 
    
        /*
         * get all table to get rowCount
         */

        action table.tableinfo r= result/    
            caslib = caslib    
            name   = name;    
     
        rowCount = result.TableInfo[1, 'rows'];    
        to       = min(from + count -1, rowCount);    
        
        /*
         * get column information
         */

        action table.columninfo r=infoResult /
            table = {caslib=caslib name=name};

        columns ={{Column='_Index_',ID=0,Type='double',RawLength=5,FormattedLength=5,NFL=0,NFD=0}};
        i = 2;
        do c over inforesult.columninfo;
           columns[i] = c;
           i = i + 1;
        end;
        
        /*
         * Fetch the current set of rows
         */

        action table.fetch r = result /    
            table = {caslib=caslib, name=name}   
            from= from to=to format=format   
            ;    

        /* 
         * create payload to return
         */

        i = 1;
        rows ={};
        do row over result.fetch;
          rr = {};
          j = 1;
          do key,v  over row;
            rr[j] = override(columns[j].Type, v);
            j = j + 1;
          end;
          rows[i] = rr;
          i = i + 1;
        end;

        pagePrev = max(from - count, 1);    
        if ( to eq rowCount ) then do;    
            pageNext = -1;    
        end;    
        else do ;    
            pageNext = min(to + 1, rowCount);    
        end;   
       return ({pagination = {prev=pagePrev, next=pageNext, count=count}, rc=0 , tableData = {rows=rows, columns=columns} } ); 
    end;    
    
    /*
     * For non-primary column types set new content
     */

    function override(type, iv);
      if (type EQ 'varbinary')       then v = '...varbinary';
      else if (type EQ  'blob')      then v = '...blob';
      else if (type EQ 'table')      then v = '...table';
      else if (type EQ 'dictionary') then v = '...dictionary';
      else if (type EQ 'list')       then v = '...list';
      else if (tyoe EQ 'isArray')    then v = '...array';
      else v = iv;
      return v;
      end;

      
    `;
    return code;
}
export default browseCasTableCasl;