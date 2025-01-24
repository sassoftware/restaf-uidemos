import React from "react";
import Dropdown from "@mui/joy/Dropdown";
import MarkdownPreview from "@uiw/react-markdown-preview";

import Help from '@mui/icons-material/Help';


function Notes(props) {
  let { value, sx, notes,_appContext } = props;

  let text = _appContext.notes;
 
  if (notes !== true ) {
    text = value;
  }

  let isx = {height: '200', ...sx};
 // let ePropsL = {placement: 'bottom-start', ...eProps};
  
  return (
    <Dropdown>
      <Help>  </Help>
      <MarkdownPreview source={text} style={isx} />
    </Dropdown>
    
  );
}
export default Notes;
