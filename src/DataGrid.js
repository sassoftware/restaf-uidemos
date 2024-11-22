import { useEffect, useState } from 'react';
import { setup, scrollTable } from '@sassoftware/restafedit';
import { DataGrid as ViyaDataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

function DataGrid(props) {
  let { value, lib, limit, name, sx, _userProps, ...rest } = props;
  let [appEnv, setAppEnv] = useState(null);
  let [columns, setColumns] = useState([]);

  useEffect(() => {
    const setup1 = async () => {
      let viyaEnv = _userProps.viyaEnv;
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
       
        tabled = { name: name };
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
            limit: (props.limit) ? props.limit : 200,
            format: true,
            where: ' '
          }
        },
      }
      console.log(appControl);
      debugger;
      // setup and read the first set of rows(reuse sessionID)
      try {
        let r = await setup(viyaEnv.logonPayload, appControl, viyaEnv.sessionID);
        debugger;
        await scrollTable('first', r);
        debugger;
        let cols = [];
        for (let k in r.state.columns ) {
          let c = r.state.columns[k];
          if (c.internal !== true && c.Column.toLowerCase() !== '_index_') {
            cols.push({
              field: c.Column,
              headerName: c.Label,
              // width: Math.max(c.FormattedLength,c.Label.length),
              minWidth: (eProps.minWidth != null) ? eProps.minWidth : 150,
              align: (c.Type === 'string') ? 'left' : 'right',
              sortable: true,
              editable: false
            });
          }
        };
        console.log(r.state.data[0]);
        console.log(cols);
        setColumns(cols);
        setAppEnv(r);
        debugger;
      } catch (err) {
        console.log(err);
        setAppEnv(null);
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


  }, [value, lib, name, _userProps]);
  console.log(scroll);
  let style = { height: 'inherit', width: 'inherit', borderStyle: 'solid', borderRadius: 2, borderWidth: '1px', borderColor: 'black', ...sx };
  let eProps = { autoPageSize: true, checkboxSelection: false, border: 1, disableSelectionOnClick: true, ...rest };
  
  let show = <Box style={style}>
    {appEnv === null ? <p> No data to display </p> :
      <ViyaDataGrid rows={appEnv === null ? null : appEnv.state.data} columns={columns} getRowId={(row)=> row._index_}{...eProps} style={style} />}
  </Box>
 
  return show;

}
export default DataGrid;