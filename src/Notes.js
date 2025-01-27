import React from "react";

import MarkdownPreview from "@uiw/react-markdown-preview";
import Popover from "@mui/material/Popover";
import IconButton from "@mui/joy/IconButton";
import HelpOutlineTwoToneIcon from '@mui/icons-material/HelpOutlineTwoTone';

function Notes(props) {
  let { value, iconsx, position, sx,  notes,_appContext } = props;
  const [anchorEl, setAnchorEl] = React.useState(null); 

  const handleClick = (event) => {
    
    setAnchorEl(event.currentTarget);
  };
  
 const handleClose = () => {
  setAnchorEl(null);
};
  
  let text = _appContext.notes;
 
  if (notes !== true ) {
    text = value;
  }

  let isx = {height: '400', width: '600',maxHeigt: '600', borderRadius: 8, overflow: 'auto', ...sx};
 // let ePropsL = {placement: 'bottom-start', ...eProps};

 let isxicon = {fontSize: "small", ...iconsx};
let ePropsL = {
  anchorPosition:{ top: 50, left: 50 },
  anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left',
      },
  transformOrigin:{
        vertical: 'top',
        horizontal: 'right',
      },
  ...position
};
 const open = Boolean(anchorEl);
 const id = open ? 'simple-popover' : undefined;

 return (
   <>
     <IconButton  onClick={handleClick}>
       <HelpOutlineTwoToneIcon sx={isxicon}> </HelpOutlineTwoToneIcon>
     </IconButton>
     <Popover 
     id={id}
      open={open}
      onClose={handleClose}
      anchorEl={anchorEl}
      {...ePropsL}
     >  <div style={isx}>
          <MarkdownPreview sx={{height: 'inherit', width: 'inherit'}} source={text} />
        </div>
     </Popover>
     
   </>
 );
 
}
export default Notes;
