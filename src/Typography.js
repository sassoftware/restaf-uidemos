/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React, {Fragment} from 'react';
import { Typography as JoyTypography} from '@mui/joy';

function Typography(props) {
  const {value,designMode, name, sx, ...eProps} = props;
  let isx = {width: 'inherit', height: 'inherit',border: '1px', borderStyle:'solid', borderWidth: 1, borderRadius: 8, ...sx}

  return <Fragment>
          <JoyTypography sx={isx} {...eProps} >{value}</JoyTypography>
          </Fragment>
}
export default Typography;