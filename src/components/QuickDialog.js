/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
// import { useAppContext } from '../../providers';

function QuickDialog (props) {
  const [open, setOpen] = useState(true);
  let sevA = ['success', 'warning' , 'error'];

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    if (props.closecb != null) {
      props.closecb();
    }
  };
  useEffect(() => {
    setOpen(true);
  }, [props.msg]);
  let  t;
  let sev;
  if (typeof props.msg === 'object') {
    t = JSON.stringify(props.msg, null, 4);
    sev = sevA[props.msg.status];
  } else {
    t = props.msg;
    sev = sevA[0];
  }

  const show = <Snackbar
    anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
    open={open}
    autoHideDuration={6000}
    onClose={handleClose}
    key="snack"
    >
    <Alert key="alert" onClose={handleClose} severity={sev} sx={{ width: '100%' }}>
      {t}
    </Alert>
  </Snackbar>;


  return show;
}

QuickDialog.propTypes = {
  /** messsage to be displayed in a snacck bar for 3 seconds */
  msg    : PropTypes.any.isRequired,
  /** userClose */
  closecb: PropTypes.func
};
export default QuickDialog;
