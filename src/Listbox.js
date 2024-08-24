import React from 'react';

// import {Sheet} from '@mui/joy'
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItemButton from '@mui/joy/ListItemButton';
import Sheet from '@mui/joy/Sheet';
function Listbox (props) {
  let {name, value, items, onChange, designMode,label, sx} = props;
  const _handleChange = (e, val) => {
    if (e == null) {
      onChange(null);
    } 
    let v = (items != null && items.length > 0 && val != null && val.trim().length > 0)? val.trim(): null;
    onChange(v);
    return;
  }
  

  let isx = {height: 'inherit', width: 'inherit', ...sx};
  let currentSelection = null;
  console.log(items);
  let options = (items == null ? [] : Array.isArray(items) ? items : 
    (typeof items === 'string' ? items.split(',') : []));
  console.log(options)
  value = (value != null) ? value.trim(): null;
  if (options.length === 0 ) {
    currentSelection =  'No items to display';
  } else {
    currentSelection = (options.includes(value)) ? value : null;
  }
 
  let ePropsL = { 
    autoComplete: true,
    value: currentSelection,
    label: (label == null) ? name : label, 
    size: "sm",
    variant: 'outlined',
    selectOnFocus: true,
    readOnly: (designMode === true) ? true : false,
    sx: isx
    };
    //for debugging purposes
    
    const check = (option, value) => {
      console.log('option:', option, 'value:', value);
      if (option === value) {
        return true;
      } else
        return false;
     }
  
    debugger;
    console.log('ePropsl:', ePropsL);
    let show = 
    <Sheet
      variant="outlined"
      sx={{
        width: 320,
        maxHeight: 300,
        overflow: 'auto',
        borderRadius: 'sm',
      }}
    >
      <List>
        <ListItem >
            <List>
              {[...Array(10)].map((__, index) => (
                <ListItem key={index}>
                  <ListItemButton>Subitem {index + 1}</ListItemButton>
                </ListItem>
              ))}
            </List>
          </ListItem>
        ))}
      </List>
    </Sheet>
  );
    return show;
}

export default Listbox;
// isOptionEqualToValue={(option, value) => (value.trim().length === 0 || option === value) ? true : false}