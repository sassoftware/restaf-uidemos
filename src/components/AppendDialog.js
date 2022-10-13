/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import React, {useState, Fragment} from 'react';
import { PropTypes } from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Checkbox from '@mui/material/Checkbox';
import DialogTitle from '@mui/material/DialogTitle';
import FormGroup  from '@mui/material/FormGroup';
import FormControlLabel  from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import SelectLibrary from './controls/SelectLibrary.js';
import SelectTable from './controls/SelectTable.js';
import QuickDialog from './QuickDialog';
import {appendRows} from '@sassoftware/restafedit';


function AppendDialog (props) {
    const {appEnv, cb} = props;
    const [open, setOpen] = useState(true);

    const [lib, setLib] = useState(appEnv.source === 'cas' ? appEnv.table.caslib : appEnv.table.libref);
    const [name, setName] = useState('');
    const [snackStatus, setSnackStatus] = useState({open:false, status:null});
    // eslint-disable-next-line no-unused-vars
    const [refreshTable, setRefreshTable] = useState(0);
    const [computeFlag, setComputeFlag] = useState(true);

    const _closeSnack = () => {
      setSnackStatus( {open:false, status: null});
    };

    const _onCompute = (e) => {
      setComputeFlag(e.target.checked);
    }
    const _handleClose = () => {
      setSnackStatus({open:false, status:null});
      setOpen(false);
      cb();
    };
    const _libSelected = (libName)=> {
      setLib(libName);
    };


    const _onName = (n) => {
      debugger;
      setName(n);
    }
    
    const _onSubmit = () => {
      if (lib.length > 0 && name.length > 0) {
        let libt = (lib.toUpperCase().indexOf('CASUSER') >= 0 && appEnv.source === 'cas') ? 'casuser' : lib;
        let table = {name: name};
        if (appEnv.source === 'cas') {
          table.caslib = libt;
        } else {
          table.libref = libt;
        }
        debugger;
        let drop = [];
        if (computeFlag === false) {
          drop = appEnv.state.columns.filter(c => c.custom === true);
        }
        appendRows(table, drop, appEnv) 
          .then ( r => {
            // setRefreshTable(refreshTable+1);
            setSnackStatus({open: true, status: r});
          })
          .catch(err => {
            console.log(err);
            setSnackStatus({open: true, status: {msg: 'Append Failed. See console', statusCode: 2}});
          })
          
        
      }

    };
  let show =
  <Fragment>
    <Paper>
      {snackStatus.open === true ? <QuickDialog msg={snackStatus.status} closecb={_closeSnack}></QuickDialog> : null}
      <Dialog open={open} fullScreen={false} maxWidth="lg" onClose={_handleClose}>
        <DialogTitle id="dialog-title">Append </DialogTitle>
        <DialogContent>
           <DialogContentText>
            Append current table to selected table
            </DialogContentText>
            <SelectLibrary appEnv={appEnv} lib={lib} cb={_libSelected}></SelectLibrary>
            <SelectTable key="selectTable" lib={lib} appEnv={appEnv} refresh={refreshTable} browse={false} cb={_onName}></SelectTable>
            <FormGroup>
              <FormControlLabel control={<Checkbox checked={computeFlag} onChange={_onCompute} ></Checkbox>}  label="Retain computed columns"></FormControlLabel>
            </FormGroup>
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

AppendDialog.propTypes = {
  /** appEnv */
  appEnv : PropTypes.object.isRequired,
  /** close function */
  closecb: PropTypes.func.isRequired
};
export default AppendDialog;
