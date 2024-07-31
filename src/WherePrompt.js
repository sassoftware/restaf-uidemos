/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

// import TextField from '@mui/material/TextField';
import Input from './Input';

function WherePrompt (props) {
  const { value, onChange } = props;
  //Hconst [where, setWhere] = useState(value);

  let pr = {
    name: 'where',
    label: 'where',
    value: value,
    type: 'text',
    style: {width: '80ch'},
    designMode: false,
    eProps: {variant: 'outlined',  size: 'small'},
    sharedProps: {},
    onChange: (v) => onChange(v)
  }
  
  return <Input {...pr}></Input>
}
export default WherePrompt;
