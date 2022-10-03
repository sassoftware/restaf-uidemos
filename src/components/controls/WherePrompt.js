/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { Fragment } from 'react';

import TextField from '@mui/material/Textfield';


function WherePrompt (props) {
  const { onEnter } = props;
  const [where, setWhere] = React.useState('');

  const _onChange = (e) => {
    const synthE = {
      key   : e.key,
      target: {
        value: e.target.value,
        name : "where"
      }
    };
    if (e.key === 'Enter') {
       onEnter(synthE);
    }
    setWhere(e.target.value);
  };
  
  const _onKeyPress = (e) => {
    if (e.key === 'Enter') {
      const synthE = {
        key   : 'Enter',
        target: {
          value: e.target.value,
          name : 'where'
        }
      };
      onEnter(synthE);
    }
    setWhere(e.target.value);
    return true;
  };
  /*
  const _onBlur = (e) => {
    // Keeping this for potential use
    return true;
  };
  */
  const inputProps = {
    inputMode : 'text',
    onKeyPress: _onKeyPress
    //onBlur    : _onBlur

  };
  
  const t =
    <Fragment>
    <TextField
        key="wherex2"
        id="where2"
        value={where}
        type="text"
        onChange={_onChange}
        size="small"
        label="where"
        sx={{width: '100%'}}
        name="where"
        variant="outlined"
        InputProps={inputProps}
    ></TextField>
    </Fragment>;
  
  return t;
}
export default WherePrompt;
