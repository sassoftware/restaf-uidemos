/*
* Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { useRef } from 'react';
import TableViewer from './TableViewer';
import useSize from '@react-hook/size';
import isMissing from './utils/isMissing';
function DataGrid(props) {
  let {value, lib, table, limit, keep, refresh,source, gridOptions,gridClass,_appContext, ...eProps} = props;
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

  if (isMissing(source)){
    show = <div>Please specify a source as cas or compute</div>;
  } else  if (isMissing(value) && (isMissing(lib) || isMissing(table))) {
    show = <div>Please specify a data source</div>;
  } else {
    show = (
      <TableViewer
        source={source}
        value={value}
        lib={lib}
        limit={limit}
        table={table}
        keep={keep}
        refresh={refresh}
        gridClass={gridClass}
        gridOptions={gridOptions}
        sx={style}
        _appContext={_appContext}
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