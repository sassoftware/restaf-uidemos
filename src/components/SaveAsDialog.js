/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import React, {useState, Fragment} from 'react';
import {uploadData, getTableList} from '@sassoftware/restafedit';
import { PropTypes } from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import SelectLibrary from './controls/SelectLibrary.js';
import QuickDialog from './QuickDialog';


function SaveAsDialog (props) {
    const {appEnv, cb} = props;
    const [open, setOpen] = useState(true);

    const [lib, setLib] = useState(appEnv.source === 'cas' ? appEnv.table.caslib : appEnv.table.libref);
    const [name, setName] = useState('');
    const [snackStatus, setSnackStatus] = useState({open:false, status:null})

    const _closeSnack = () => {
      setSnackStatus( {open:false, status: null});
    };

    const _handleClose = () => {
      setSnackStatus({open:false, status:null});
      setOpen(false);
      cb();
    };
    const _libSelected = (libName)=> {
      setLib(libName);
      
    };

    const _onName = (e) => {
      setName(e.target.value);
    }
    
    const _onSubmit = () => {
      if (lib.length > 0 && name.length > 0) {
        let tname = `${lib}.${name}`;
        let table = {name: name};
        if (appEnv.source === 'cas') {
          table.caslib = lib;
        } else {
          table.libref = lib;
        }
        uploadData(table, null, [],{},appEnv) 
          .then ( r => {
            console.log(r);
            setSnackStatus({open: true, status: {msg: tname, statusCode: 0}});
          })
          .catch(err => {
            console.log(err);
            setSnackStatus({open: true, status: {msg: 'failed', statusCode: 2}});
          })
        
      }

    };
  debugger;
  let show =
  <Fragment>
    <Paper>
      {snackStatus.open === true ? <QuickDialog msg={snackStatus.status} closecb={_closeSnack}></QuickDialog> : null}
      <Dialog open={open} fullScreen={false} maxWidth="lg" onClose={_handleClose}>
        <DialogTitle id="dialog-title">Save As </DialogTitle>
        <DialogContent>
           <DialogContentText>
            Save client data as a new table
            </DialogContentText>
           <SelectLibrary appEnv={appEnv} showTables={"disabled"}cb={_libSelected}></SelectLibrary>
           <TextField 
              id="name" 
              key="name"
              type="text" 
              onChange={_onName} 
              size="small"
              sx={{width: '100%'}}
              name="name"
              variant="outlined"
              value={name}
              >

            </TextField>
           </DialogContent>

        <DialogActions>
          <Button onClick={_onSubmit} color="primary">
            Save
          </Button>
          <Button onClick={_handleClose} color="primary">
            Return
          </Button>
        </DialogActions>
      </Dialog>
      </Paper>
    </Fragment>;

    
    return show;
}

SaveAsDialog.propTypes = {
  /** appEnv */
  appEnv : PropTypes.object.isRequired,
  /** close function */
  closecb: PropTypes.func.isRequired
};
export default SaveAsDialog;
