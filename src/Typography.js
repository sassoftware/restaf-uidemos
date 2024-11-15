// import React from 'react';
import { Fragment } from 'react';
import { Typography as JoyTypography } from '@mui/joy';

function Typography(props) {
  const { value, designMode, name, sx, _userProps, ...eProps } = props;
  let isx = {
    width: 'inherit',
    height: 'inherit',
    border: '1px',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 8,
    ...sx
  };

  let show = (
    <Fragment>
      <JoyTypography sx={isx} {...eProps}>
        {value}
      </JoyTypography>
    </Fragment>
  );
  return show;
}

export default Typography;