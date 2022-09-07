/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, Fragment } from 'react';
import { PropTypes } from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Select from 'react-select';
import TableEditor from './TableEditor';
import Paper from '@material-ui/core/Paper';
import QuickDialog from './QuickDialog';
import { distinctValues } from '@sassoftware/restafedit';

function SubmitDialog (props) {
  const { appEnv, closecb } = props;
  const { support } = appEnv.appControl;
  const [open, setOpen] = useState(true);
  const [selectedValue, setSelectedValue] = useState([]);
  const [snackMessage, setSnackMessage] = useState(null);
  const submitStatus = null;

  const _handleClose = () => {
    setOpen(false);
    closecb();
  };
  const _handleChange = (event) => {
    
    setSelectedValue([event]);
  };

  const _closeSnack = () => {
    setSnackMessage(null);
  };
  const _onSubmit = () => {
    if (selectedValue.length === 0) {
      setSnackMessage('Please select a customer');
      return;
    }

    const userSubmit = appEnv.appControl.editControl.handlers.save;
    
    const finalData = appEnv.appControl.editControl.handlers.review(appEnv.state.data, appEnv);
    
    if (finalData.length === 0) {
      setSnackMessage('No data to submit');
    }
    if (userSubmit !== null) {
      userSubmit(finalData, selectedValue[0].label, appEnv)
        .then(r => {
          setSnackMessage('Data saved');
        })
        .catch(err => {
          setSnackMessage(`ERROR: Save failed. ${err}`); ;
        });
    }
  };

  useEffect(() => {
    if (support.company.distinct === null || support.company.distinct.length === 0) {
      distinctValues(support.company.table, support.company.column, appEnv)
        .then(r => {
          const rx = r.company.map((c, i) => {
            return { value: i, label: c };
          });
          support.company.distinct = rx;
          setOpen(true);
          setSelectedValue([]);
        })
        .catch(err => {
          setSnackMessage('Distinct Value failed. Please see log');
        });
    }
    // eslint-disable-next-line
  }, [props.msg]);

  const show =
    <Fragment>
      {snackMessage != null ? <QuickDialog msg={snackMessage} closecb={_closeSnack}/> : null}
      <Paper>
      <Dialog open={open} fullScreen={false} maxWidth="lg" onClose={_handleClose}>
      <DialogTitle id="dialog-title">Review </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Select customer.
          </DialogContentText>
        </DialogContent>
        {support.company.distinct !== null
          ? <Select label={support.company.column} options={support.company.distinct} value={selectedValue}
                onChange={(e) => _handleChange(e)} closeMenuOnSelect={true} />
          : null}
                <DialogActions>
          <Button onClick={_onSubmit} color="primary">
            Submit
          </Button>
          <Button onClick={_handleClose} color="primary">
            Return
          </Button>
        </DialogActions>
        <br/>
        <TableEditor onEdit={null} saveDialog={true} appEnv={appEnv} status={null} key={Date()}/>

      </Dialog>
      </Paper>
      {submitStatus}
    </Fragment>;

  return show;
}

SubmitDialog.propTypes = {
  /** appEnv */
  appEnv : PropTypes.object.isRequired,
  /** close function */
  closecb: PropTypes.func.isRequired
};
export default SubmitDialog;
