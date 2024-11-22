import { useEffect, useState } from 'react';
import { setup, scrollTable } from '@sassoftware/restafedit';
import { DataGrid as ViyaDataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

function DataGrid(props) {
  let { lib, name, sx, _userProps, ...rest } = props;
  let [appEnv, setAppEnv] = useState(null);
  let [columns, setColumns] = useState([]);

  useEffect(() => {
    const setup1 = async () => {
      let viyaEnv = _userProps.viyaEnv;
      let tabled = { name: name };
      if (viyaEnv.source === 'cas') {
        tabled.caslib = lib;
      } else {
        tabled.libref = lib;
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

      // setup and read the first set of rows(reuse sessionID)
      try {
        let r = await setup(viyaEnv.logonPayload, appControl, viyaEnv.sessionID);
        debugger;
        await scrollTable('first', r);
        debugger;
      } catch (err) {
        console.log(err);
      }

      let cols = [];
      r.state.columns.forEach(c => {
        if (c.internal === false) {
          cols.push({
            field: c.Column,
            headerName: c.Label,
            editable: false
          });
        }
      });
      setColumns(cols);
      setAppEnv(r);
    };
    debugger;
    
    if (lib && name && _userProps) {
      setup1()
        .then(r => {
          console.log('setup done');
        })
        .catch(err => {
          console.log(err);
        });
    }

  }, [lib, name, _userProps]);
  console.log(scroll);
  let style = { height: 'inherit', width: 'inherit', borderStyle: 'solid', borderRadius: 2, borderWidth: '1px', borderColor: 'black', ...sx };
  let eProps = { pageSize: 20, rowsPerPageOptions: [20], checkboxSelection: false, border: 1, disableSelectionOnClick: true, ...rest };

  let show = <Box style={style}>
    {appEnv === null ? <p> No data to display </p> :
      <ViyaDataGrid rows={appEnv === null ? null : appEnv.state.rows} columns={columns} {...eProps} style={style} />}
  </Box>
 
  return show;

}
export default DataGrid;