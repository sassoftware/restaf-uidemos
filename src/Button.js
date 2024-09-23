/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import {Button as JoyButton} from '@mui/joy';

function Button(props) {
  const {value, sx, label, designMode, onChange,...eProps} = props;
  
  const _handleClick = () => {
    onChange(value);
  }
  let ePropsL = {variant: 'outlined', disabled: designMode, color: 'primary', size:"md", ...eProps};

  // using value - to allow for changing the text of the button programmatically
  let isx = {textTransform: 'capitalize',backgroundColor: 'lightblue', height: 'inherit', width: 'inherit', ...sx};
  return <JoyButton sx={isx} 
            {...ePropsL}
            onClick={_handleClick}>{label}</JoyButton>;
}
export default Button;