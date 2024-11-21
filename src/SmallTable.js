import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { setup, scroll } from '@sassoftware/restafedit';

function SmallTable(props) {
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

      // setup and read the first set of rows(reuse sessionID)
      let r = await setup(viyaEnv.logonPayload, appControl, viyaEnv.sessionID);
      await scroll('first', r);

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
  
  let style = { height: 'inherit', width: 'inherit',  borderStyle: 'solid', borderRadius: 2, borderWidth: '1px', borderColor: 'black', ...sx};
  let eProps = {pageSize:20, rowsPerPageOptions:[20], checkboxSelection:false, border: 1, disableSelectionOnClick: true, ...rest};
  return (
    <Box sx={style}>
      {appEnv === null   ? <p>No Data to display </p>
      : <DataGrid
        rows={appEnv.state.rows}
        columns={columns}
        {...eProps}
      />}
    </Box>
  );



}
export default SmallTable;