/*
* Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/
import { useRef } from 'react';
import TableViewer from './TableViewer';
import useSize from '@react-hook/size';
import isMissing from './utils/isMissing';
function DataGrid(props) {
  let {value, lib, table, limit, keep, refresh, gridOptions,gridClass,_userProps, ...eProps} = props;
  const parentRef = useRef(null);
  const [width, height] = useSize(parentRef); // aggrid seems to work better with pixels for w and h

  const divStyle = {
    height: 'inherit',
    width: 'inherit',
    minWidth: '30px',
    borderStyle: 'solid',
    borderRadius: 4,
    borderWidth: '1px',
    borderColor: 'black'
  };

  const style = { height, width };

  let show;
  console.log(value, lib, table);
  if (isMissing(value) && (isMissing(lib) || isMissing(table))) {
    show = <div>Please specify a data source</div>;
  } else {
    show = (
      <TableViewer
        value={value}
        lib={lib}
        limit={limit}
        table={table}
        keep={keep}
        refresh={refresh}
        gridClass={gridClass}
        gridOptions={gridOptions}
        sx={style}
        _userProps={_userProps}
      />
    );
  }

  return (
    <div ref={parentRef} id="datagridtable" style={divStyle}>
      {show}
    </div>
  );
};

export default DataGrid;