
import { useEffect, useState, useRef} from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import Button from '@mui/material/Button';
import ChevronRight from '@mui/icons-material/ChevronRight';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import FirstPage from '@mui/icons-material/FirstPage';
import { setup, scrollTable } from '@sassoftware/restafedit';

function TableViewer(props) {
  let { value, lib,table,limit,keep, refresh, sx,gridOptions, _userProps } = props;
  let [redraw, reDraw] = useState(false); 
  let control = useRef({appEnv: null, columns: null, msg: null}); 
  
  useEffect(() => {

      const setup1 = async () => {
        let viyaEnv = _userProps.viyaEnv;
        debugger;
        let tabled = {};
        if (value != null && value.trim().length > 0) {
          let t = value.split('.');
          tabled = { name: t[1] };
          if (viyaEnv.source === 'cas') {
            tabled.caslib = t[0];
          } else {
            tabled.libref = t[0];
          }
        } else { 
          if (table === null || table.trim().length === 0 || lib === null || lib.trim().length === 0) { 
            return;
          }
          tabled = { name: table };
          if (viyaEnv.source === 'cas') {
            tabled.caslib = lib;
          } else {
            tabled.libref = lib;
          }
        }
      
        let appControl = {
          source: viyaEnv.source,
          table: tabled,
          initialFetch: {
            qs: {
              start: 0,
              limit: (limit) ? limit : 20,
              format: true,
              where: ' '
            }
          },
        }
       
        // setup and read the first set of rows(reuse sessionID)
        try {
        
          
          let tAppEnv = await setup(viyaEnv.logonPayload, appControl, viyaEnv.sessionID);
        
          await scrollTable('first',tAppEnv);
          
          let columns = [];
          let showColumns = tAppEnv.state.columns;
          if (keep != null && keep.length > 0) {
            showColumns = {};
            let ocolumns = tAppEnv.state.columns;
            keep.forEach(k => {    
              k = k.toLowerCase();
              if (ocolumns[k] != null) {
                showColumns[k] = ocolumns[k];
              }
            })
          }
          for (let k in showColumns) {
            let c = showColumns[k];
          // let setVal = cellValue(k, c.Type);
            
            if (c.internal !== true && k !== '_index_') {
              columns.push({
                field: c.Column.toLowerCase(),
                headerName: c.Label,
                //valueGetter: setVal,
                cellStyle: (c.Type === 'double') ? { textAlign: 'right' } : { textAlign: 'left' },
                sortable: true,
                editable: false,
                resizable: true,
              });
            }
          };
          control.current = {appEnv: tAppEnv, columns: columns};
          reDraw(!redraw);
          return true;

        
      } catch (err) {
        console.log(err);
        control.current = {appEnv: null, columns: null, msg: err};
      }
    }
    debugger;
    setup1()
      .then(r => {
        console.log('setup status', r);
      })
      .catch(err => {
        console.log(err);
        control.current = {appEnv: null, columns: null, msg: err};
      });


  }, [value, lib, table, limit, keep, gridOptions, refresh]);


 

  const _scroll = (direction) => {
    let appEnv = control.current.appEnv;
    scrollTable(direction, appEnv)
      .then(r => {
        control.current = {appEnv: appEnv, columns: control.current.columns};
        reDraw(!redraw);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const _getRows = () => {
    // not really needed but useful when debugging issues.
    let data = control.current.appEnv.state.data;
    return data;
  }
 
  let show  = null;
  let gridStyle = { height: sx.height -32 , width: sx.width };
  let agTheme ='ag-theme-alpine';
  let eProps = {pagination: true, paginationPageSize: 20, ...gridOptions};

  if (control.current.columns !== null) {
    let scrollOptions = control.current.appEnv.state.scrollOptions;
    show = 
    <>
    <div style={{height: '30px', borderBottom:'2px', minHeight: '30px', direction: 'row'}}>
        <Button key={"b1"} onClick={() => _scroll('first')} disabled={scrollOptions.includes('first') === false} ><FirstPage/></Button>
        <Button key={"b2"} onClick={()=> _scroll('prev')}  disabled={scrollOptions.includes('prev') === false}><ChevronLeft/></Button>
        <Button key={"b3"} onClick={()=>_scroll('next')} disabled={scrollOptions.includes('next') === false}><ChevronRight/></Button>
    </div>
    <div className={agTheme} style={gridStyle}>
      <AgGridReact
        rowData={_getRows()}
        columnDefs={control.current.columns}
        {...eProps} />
    </div></>;
  }
    
  return show;

}
export default TableViewer;
