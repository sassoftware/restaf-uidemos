/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import JoyButton from '@mui/joy/Button';

function Button(props) {
  const {value, sx, label, onChange,_appContext,...eProps} = props;
  const _handleClick = () => {
    onChange(value);
  }
  let ePropsL = {variant: 'outlined', color: 'primary', size:"md", ...eProps};

  // using value - to allow for changing the text of the button programmatically
  let isx = {textTransform: 'capitalize',backgroundColor: 'lightblue',borderRadius: 8, height: 'inherit', width: 'inherit', ...sx};
  return <JoyButton sx={isx} 
            {...ePropsL}
            onClick={_handleClick}>{label}</JoyButton>;
}
export default Button;