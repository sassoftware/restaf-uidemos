/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import Popover from '@mui/material/Popover';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import getStyles from './utils/getStyles';

function PopupMenu(props) {
  const { menuItems, onChange, open } = props;
  const { onEdit } = props.sharedProps;
  let style = getStyles(props);

  const _handleClose = () => {
    _onClick(null);
  }
  const _onClick = (m) => {
    let synthe = {
      key: 'Enter',
      target: {
        value: m
      }
    };
    (onChange != null) ? onChange(synthe) : onEdit(synthe);
  };

  let showMenu = menuItems.map(m => {
    return <MenuItem onClick={() => _onClick(m)} >{m}</MenuItem>;
  });

  if (open === false) {
    return null;
  } else {
    return (<div>
      <Popover
        id="mainDiv"
        open={open}
        sx={style}
        onClose={_handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Menu>
          {showMenu}
        </Menu>
      </Popover>
    </div>
    );
  }
}
export default PopupMenu;