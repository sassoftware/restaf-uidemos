/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import * as React from 'react';
import {
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport
  /*GridToolbarDensitySelector,*/
} from '@mui/x-data-grid';

function GridToolbarCustom(_props) {
    return <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarExport />
      </GridToolbarContainer>
      ;
}
export default GridToolbarCustom;
