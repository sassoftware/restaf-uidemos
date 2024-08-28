import React from "react";
import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import MoreVert from '@mui/icons-material/MoreVert';


function DropDownMenu(props) {
  let { items, sx, valueType, label, ...eProps } = props;
  const onSelect = (m, i) => {
    props.onChange(valueType === 'index' ? i.toString() : m);
  };
  
  let menuList = [];
  let sxb ={textTransform: 'capitalize',justifyContent: 'flex-start' };
  if (items != null) {
    items.forEach((m, i) => {
      menuList.push(
        <MenuItem key={m} sx={sxb} onClick={() => onSelect(m, i)}>
          {m}
        </MenuItem>
      );
    });
  }

  let isx = {height: 'inherit',justifyContent: 'left', ...sx};
  let ePropsL = {placement: 'bottom-start', ...eProps};
  return (
    
    <Dropdown>
      <MenuButton sx={isx} {...ePropsL}>
        <MoreVert/>
        {label}
      </MenuButton>
      <Menu{...ePropsL} >{menuList}</Menu>
    </Dropdown>
    
  );
}
export default DropDownMenu;
