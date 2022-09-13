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
