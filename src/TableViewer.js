
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
  let { control,keep, sx,...rest } = props;
  let [columns, setColumns] = useState([]);
  let [currentData, setCurrentData] = useState([]);
  

 
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
       
        await scrollTable('first',control.current);
        setCurrentData(control.current.state.data);
        debugger;
        let columns = [];
        let showColumns = control.current.state.columns;
        if (keep != null && keep.length > 0) {
          showColumns = {};
          keep.forEach(k => {    
            k = k.toLowerCase();
            if (control.current.state.columns[k] != null) {
              showColumns[k] = control.current.state.columns[k];
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
        console.log(control.current.state.data[0]);
        console.log(columns);
        setColumns(columns);
      //  setCurrentData(control.current.state.data);

        debugger;
      } catch (err) {
        console.log(err);
        setCurrentData(null);
        setColumns([]);
      }
    }

    debugger;
    console.log('in TableViewer useEffect');

    setup1()
      .then(r => {
        console.log('setup done');
      })
      .catch(err => {
        console.log(err);
      });


  }, []);


  let eProps = { pagination: true, paginationPageSize: 20 /*domautoHeightLayout: ''*/ };

  const _getRows = () => {
    console.log(currentData);
    debugger;
    return currentData;
  }

  const _scroll = (direction) => {
    debugger;
    console.log('scrolling', direction);
    console.log(control.current.state.scrollOptions)
    scrollTable(direction, control.current)
      .then(r => {
        console.log('scroll done');
        debugger;
        setCurrentData(control.current.state.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  let gridStyle = { height: sx.height -32 , width: sx.width };
  console.log(gridStyle);
  debugger;
  console.log('data length', control.current.state.data.length);
  let show = (columns.length === 0 ) ? null :
    <>
    <div style={{height: '30px', borderBottom:'2px', minHeight: '30px', direction: 'row'}}>
        <Button key={"b1"} onClick={() => _scroll('first')} disabled={control.current.state.scrollOptions.includes('first') === false} ><FirstPage/></Button>
        <Button key={"b2"} onClick={()=> _scroll('prev')}  disabled={control.current.state.scrollOptions.includes('prev') === false}><ChevronLeft/></Button>
        <Button key={"b3"} onClick={()=>_scroll('next')} disabled={control.current.state.scrollOptions.includes('next') === false}><ChevronRight/></Button>
    </div>
    <div className="ag-theme-alpine" style={gridStyle}>
      <AgGridReact
        rowData={_getRows()}
        columnDefs={columns}
        {...eProps} />
    </div></>;
  

  return show;

}
export default TableViewer;

/*
<><div style={{height: '30px', borderBottom:'2px', minHeight: '30px', direction: 'row'}}>
        <Button key={"b1"} onClick={() => _scroll('first')} disabled={control.current.scrollOptions.includes('first') === false} ><FirstPage/></Button>
        <Button key={"b2"} onClick={()=> _scroll('prev')}  disabled={control.current.scrollOptions.includes('prev') === false}><ChevronLeft/></Button>
        <Button key={"b3"} onClick={()=>_scroll('next')} disabled={control.current.scrollOptions.includes('next') === false}><ChevronRight/></Button>
    </div>
*/