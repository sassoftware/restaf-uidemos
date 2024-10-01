/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from "react";
import getLocalFile from "./utils/getLocalFile";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
function SelectLocalFile(props) {
  let { value, type, label, sx, onChange } = props;
  const [newFile, setNewFile] = useState(value == null ? "" : value);

  const setNewName= (v) => {
    setNewFile(v);
    dataProps.name = v;
  }
  const _onImport = () => {
    let accept = (type == null) ? '.txt' : type;
    getLocalFile(dataProps.valueType, dataProps, mode, accept)
      .then((r) => {
        setNewFile(r.name);
        
        onChange(
          dataProps.valueType === "handle"
            ? r.handle
            : dataProps.valueType === "name"
            ? r.name
            : r.content
        );
      })
      .catch((e) => {
        console.log(e);
        onChange(null);
      });
  };
  
  let msg = (buttonLabel != null) ? buttonLabel : (mode === 'write') ? 'Select Folder' : 'Select Form'
  
  let show = (
    <div style={style}>
      <Input
        value={newFile}
        label={buttonLabel == null ? 'Open' : buttonLabel}
        onChange={(e) => setNewName(e.target.value)}
        endDecorator={
          <Button
            size="sm"
            key="openButtonform"
            variant="outlined"
            onClick={() => _onImport()}
          >
            {msg}
          </Button>
        }
      />
    </div>
  );
  return show;
}
export default SelectLocalFile;
