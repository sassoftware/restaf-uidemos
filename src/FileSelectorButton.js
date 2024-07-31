/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { createRef, Fragment } from 'react';

import Button from '@mui/material/Button';


/**
 * Prompts user to select a file
 * @param {*} props
 */

function FileSelectorButton(props) {
  let { name, onChange } = props;
  let inputRef = createRef(null);
  const _focusTextInput = () => inputRef.current.click();  //.click() passes the value of inputref.current as a click() event


  const _handleSelect = () => {

    let file = inputRef.current.files[0];
    if (file == null) {
      if (onChange !== null) {
        const synthE = {
          key: 'Enter',
          target: {
            value: null,
            name: name
          }
        };
        onChange(synthE);
      }
    } else {
      let fname = file.name;
      let reader = new FileReader();

      reader.onload = (evt) => {
        if (onChange !== null) {
          const synthE = {
            key: 'Enter',
            target: {
              value: { fname: fname, file: file },
              name: name
            }
          };
          onChange(synthE);
        }
        if (inputRef.current !== null) {
          inputRef.current.value = '';
        }
      };
    inputRef.current.value = '';
    reader.readAsText(file);
  }
};

let show = (
  <Fragment>
    <input key="file" type="file" id="file" ref={inputRef} style={{ display: 'none' }}
      onChange={_handleSelect} />
    <Button
      key={"fbutton"}
      size="small"
      variant="outlined"
      onClick={_focusTextInput}>
      {props.label}
    </Button>
    <br></br>
  </Fragment>
);

return show;
}


export default FileSelectorButton;