import React from "react";

import MarkdownPreview from "@uiw/react-markdown-preview";
import { Popover, Typography, Button } from "@mui/material";
import Help from '@mui/icons-material/Help';

function Notes(props) {
  let { value, sx, notes,_appContext } = props;
  const [anchorEl, setAnchorEl] = React.useState(null); 

  const handleClick = (event) => {
    debugger;
    setAnchorEl(event.currentTarget);
  };
  
 const handleClose = () => {
  setAnchorEl(null);
};
  debugger;
  let text = _appContext.notes;
 
  if (notes !== true ) {
    text = value;
  }

  let isx = {height: '200', width: '600', ...sx};
 // let ePropsL = {placement: 'bottom-start', ...eProps};


 const open = Boolean(anchorEl);
 const id = open ? 'simple-popover' : undefined;
debugger;
 return (
   <div>
     <Button onClick={handleClick}>
     <Help/>
     </Button>
     <Popover 
     id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
     >
          <MarkdownPreview sx={isx} source={text} />
     </Popover>
     
   </div>
 );
 
}
export default Notes;
