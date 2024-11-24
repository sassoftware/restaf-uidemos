
import { useEffect, useState} from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import Button from '@mui/material/Button';
import ChevronRight from '@mui/icons-material/ChevronRight';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import FirstPage from '@mui/icons-material/FirstPage';
import { setup, scrollTable } from '@sassoftware/restafedit';

function TableViewer(props) {
  let { appEnv, sx, keep, ...rest } = props;
  let [columns, setColumns] = useState([]);
  let [currentData, setCurrentData] = useState(null);

 
  useEffect(() => {
    const setup1 = async () => {
      /*
      const cellValue = (name, type) => (params) => {
        if (type === 'number') {
          return params.data[name];
        } else return params.data[name].trim();
      }
        */
      // setup and read the first set of rows(reuse sessionID)
      try {
        debugger;
        await scrollTable('first', appEnv);
        debugger;
        let columns = [];
        let showColumns = appEnv.state.columns;
        if (keep != null && keep.length > 0) {
          showColumns = {};
          keep.forEach(k => {    
            k = k.toLowerCase();
            if (appEnv.state.columns[k] != null) {
              showColumns[k] = appEnv.state.columns[k];
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
        console.log(appEnv.state.data[0]);
        console.log(columns);
        setColumns(columns);
        setCurrentData(appEnv.state.data);

        debugger;
      } catch (err) {
        console.log(err);
        setCurrentData(null);
        setColumns([]);
      }
    }

    debugger;


    setup1()
      .then(r => {
        console.log('setup done');
      })
      .catch(err => {
        console.log(err);
      });


  }, [appEnv]);


  let eProps = { pagination: true, paginationPageSize: 20 /*domautoHeightLayout: ''*/ };

  const _getRows = () => {
    console.log(currentData);
    debugger;
    return currentData;
  }

  const _scroll = (direction) => {
    debugger;
    console.log(direction);
    console.log(appEnv.state.scrollOptions)
    scrollTable(direction, appEnv)
      .then(r => {
        console.log('scroll done');
        setCurrentData(appEnv.state.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

 
  let gridStyle = { height: sx.height -32 , width: sx.width };
  console.log(gridStyle);
  debugger;
  let show = (currentData === null) ? null :
    <><div style={{height: '30px', borderBottom:'2px', minHeight: '30px', direction: 'row'}}>
        <Button key={"b1"} onClick={() => _scroll('first')} disabled={appEnv.state.scrollOptions.includes('first') === false} ><FirstPage/></Button>
        <Button key={"b2"} onClick={()=> _scroll('prev')}  disabled={appEnv.state.scrollOptions.includes('prev') === false}><ChevronLeft/></Button>
        <Button key={"b3"} onClick={()=>_scroll('next')} disabled={appEnv.state.scrollOptions.includes('next') === false}><ChevronRight/></Button>
    </div>
    <div className="ag-theme-alpine" style={gridStyle}>
      <AgGridReact
        rowData={_getRows()}
        columnDefs={columns}
        {...eProps} />
    </div></>;
  

  return <div style={sx }>
    {show}
  </div>;

}
export default TableViewer;
