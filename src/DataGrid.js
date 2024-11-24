import { useEffect, useState, useRef } from 'react';
import { setup } from '@sassoftware/restafedit';
import TableViewer from './TableViewer';
import useSize from '@react-hook/size';
function DataGrid(props) {
  let { value, lib, limit, table, keep, sx, _userProps, ...rest } = props;
  let [appEnv, setAppEnv] = useState(null);
  let [columns, setColumns] = useState([]);
  let parentRef = useRef(null);
  const [width,height] = useSize(parentRef);
  
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
        console.log(appControl);
        // setup and read the first set of rows(reuse sessionID)
        try {
          let tAppEnv = await setup(viyaEnv.logonPayload, appControl, viyaEnv.sessionID);
          setAppEnv(tAppEnv);
          debugger;
          return true
        } catch (err) {
          console.log(err);
          setAppEnv(null);
          return false;
        }

      }
  
      if (_userProps === null || _userProps.viyaEnv === null) {
        console.log('No Viya Environment');
        return;
      } 
      setup1()
      .then(r => {
        console.log(r);
        console.log('setup done');
      })
      .catch(err => {
        console.log(err);
      });
      
     
    }, [appEnv, lib, limit, table, value, _userProps]);

    console.log('...', width, height);

    let style= { height: height, width: width, borderStyle: 'solid', borderRadius: 4, borderWidth: '1px', borderColor: 'black', ...sx};

    let show = (appEnv === null) ? <p> No data </p> : <TableViewer  appEnv={appEnv} keep = {keep} sx={style} />;
    return   <div ref={parentRef} id="page-wrap" style={{height: 600, width: 800}}>
        {show}
      </div>;
  return show;

}
export default DataGrid;