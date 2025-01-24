import React from "react";

import MarkdownPreview from "@uiw/react-markdown-preview";
import Popover from "@mui/material/Popover";
import IconButton from "@mui/joy/IconButton";
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

  let isx = {height: '400', width: '600',maxHeigt: '600', borderRadius: 8, overflow: 'auto', ...sx};
 // let ePropsL = {placement: 'bottom-start', ...eProps};


 const open = Boolean(anchorEl);
 const id = open ? 'simple-popover' : undefined;
debugger;
 return (
   <>
     <IconButton  onClick={handleClick}>
       <Help></Help>
     </IconButton>
     <Popover 
     id={id}
      open={open}
     
      onClose={handleClose}
      anchorPosition={{ top: 50, left: 50 }}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
     >  <div style={isx}>
          <MarkdownPreview sx={{height: 'inherit', width: 'inherit'}} source={text} />
        </div>
     </Popover>
     
   </>
 );
 
}
export default Notes;
