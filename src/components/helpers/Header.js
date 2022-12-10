/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState, useEffect, Fragment } from 'react';
import { PropTypes } from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import Home from '@mui/icons-material/Home';
import Menu from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Home from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer'
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { useNavigate } from 'react-router-dom';
import ListMenu from './ListMenu';
import QuickNotes from '../helpers/QuickNotes';
import { useAppContext } from '../../providers';


function Header(props) {
  const { title, appMenus } = props;
  let [menuIsOpen, setMenuIsOpen] = useState(false);
 

  let { store, classes, appEnv } = useAppContext();
  let navigate = useNavigate();
  let [admin, setUserAdmin] = useState(null);

  async function isUserAdmin(store) {
    let { identities } = await store.addServices('identities');
    let c = await store.apiCall(identities.links('currentUser'));
    let r = await store.apiCall(identities.links('currentUserAdmin'));
    let name = c.items('name');
    let admin = (r.items() === true) ? `${name}:admin` : name;
    setUserAdmin(admin);
    return true;
  }
  useEffect(() => {
    isUserAdmin(store)
      .catch((err) => console.error(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

 

  const _logout = () => {
    let url = `${window.location.protocol}//${window.location.host}/${props.appName}/logout`;
    window.location.replace(url);
  };

  const _handleClickAway = (open) => {
    setMenuIsOpen(open);
  };
  const _toggleMenu = (state) => {

    setMenuIsOpen(state);
  };

  const _routeTo = (_index, m) => {
    setMenuIsOpen(false);
    
    console.log(`/${m.component}`);
    console.log(m.props);
    navigate(`/${m.component}`, m.props);
  };

  let jobTracker = appEnv.jobTracker;

  return (
    <div>
      <AppBar position="static" className={classes.appBar1}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
               sx={{ mr: 2 }}
            onClick={() => _toggleMenu(true)}>
            <Menu />
          </IconButton>

          <IconButton size="small"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={() => navigate('/Home')}>
            <Home />
          </IconButton>

          <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <div>
            <Typography variant="caption" color="inherit">
              {admin}
            </Typography>

            <Divider orientation="horizontal" flexItem></Divider>

            <Button size="small"
              className={classes.button}
              color="inherit"
              aria-label="Menu"
              fontSize="small"
              onClick={() => _logout()}>
              Logout
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        anchor="left"
        open={menuIsOpen}
        onClose={() => _toggleMenu(false)}
        classes={{
          paper: classes.drawerPaper,
        }}>
        <div className={classes.drawerHeader}>
          <IconButton size="small" onClick={() => _toggleMenu(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <ClickAwayListener onClickAway={() => _handleClickAway(false)}>
          <Fragment>
            <ListMenu menus={appMenus} onSelect={_routeTo} classes={classes} />
          </Fragment>
        </ClickAwayListener>
      </Drawer>
      {jobTracker != null ? <QuickNotes /> : null}
      <br></br>

    </div>
  );

}


export default Header;
