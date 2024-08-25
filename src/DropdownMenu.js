import React from "react";
import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import MoreVert from '@mui/icons-material/MoreVert';


function DropDownMenu(props) {
  let { items, style, valueType, label, ...eProps } = props;
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

  let sx = {height: 'inherit',justifyContent: 'left', ...style};
  let ePropsL = {placement: 'bottom-start', ...eProps};
  return (
    
    <Dropdown>
      <MenuButton sx={sx} {...ePropsL}>
        <MoreVert/>
        {label}
      </MenuButton>
      <Menu{...ePropsL} >{menuList}</Menu>
    </Dropdown>
    
  );
}
export default DropDownMenu;
