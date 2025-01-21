import React from 'react';
import { Fragment } from 'react';
import { Typography as JoyTypography } from '@mui/joy';

function Typography(props) {
  const { value, name, sx,altText, _appContext, ...eProps } = props;
  let isx = {
    width: 'inherit',
    height: 'inherit',
    border: '1px',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 8,
    ...sx
  };
  let ival = (value == null || value.trim().length === 0) ? altText : value;
  
  let show = (
    <Fragment>
      <JoyTypography sx={isx} {...eProps}>
        {ival}
      </JoyTypography>
    </Fragment>
  );
  return show;
}

export default Typography;