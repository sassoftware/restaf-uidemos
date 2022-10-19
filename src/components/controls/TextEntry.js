/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { Fragment } from 'react';

import TextField from '@mui/material/TextField';
import uuid from 'react-uuid';

function TextEntry (props) {
  const { details, onEnter, controlProps, rowIndex } = props;
  let value = props.value;
  const disabled = (controlProps.disabled != null) ? controlProps.disabled : false;
  const key = details.name + uuid();
  
  const _onChange = (e) => {
    const synthE = {
      key   : 'Enter',/* forcing enter- e.key */
      rowIndex,
      target: {
        value: e.target.value,
        name : details.name
      }
    };
    onEnter(synthE);
  };
/*
  const _onKeyPress = (e) => {
    if (e.key === 'Enter') {
      const synthE = {
        key   : 'Enter',
        rowIndex,
        target: {
          value: e.target.value,
          name : details.name
        }
      };
      
      onEnter(synthE);
    }
    return true;
  };
  const _onBlur = (e) => {
    const synthE = {
      key   : 'Enter',
      rowIndex,
      target: {
        value: e.target.value,
        name : details.name
      }
    };
    onEnter(synthE);
  };
  */
  
  const inputProps = {
    inputMode : 'text',
   // onKeyPress: _onKeyPress,
   // onBlur    : _onBlur,
    style     : { textAlign: props.align }

  };

  const t =
    <Fragment>
        <TextField
            key={key}
            id={key}
            value={value}
            type="text"
            inputProps={inputProps}
            onChange={_onChange}
            disabled={disabled}
            size="small"
            label={details.Label}
            name={details.name}
        />

        </Fragment>;

  return t;
}
export default TextEntry;
