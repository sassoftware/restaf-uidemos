/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { PropTypes } from 'prop-types';

import ScrollMenu from './ScrollMenu';
import ItemsListMenu from './ItemsListMenu';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {useAppContext} from '../../providers';

function ItemsMenu(props) {
    let {result, showMenu, selected, onSelect} = props;
    let {store} = useAppContext();
    
   
   const  _onScroll = (rel) => {
       
       let raflink = (rel === 'self') ? result.links('self') : result.scrollCmds(rel);
        store.apiCall(raflink)
            .then (r => {
                // setState(r);
                onSelect(0,null,r);
            })
            .catch( err => {
                throw alert(JSON.stringify(err, null,4));
            })
    }

    
    const _show = () => {
        let show = (
            <div>
                <Paper>
                <Grid container spacing={3} direction="column">
                    <Grid item>
                    {showMenu === true ? <ScrollMenu folder={result} refresh={false} onSelect={_onScroll}/> : null}
                    </Grid>
                </Grid>
                <Grid item>
                    <ItemsListMenu result={result} selected={selected} onSelect={onSelect} />
                </Grid>

                </Paper>
            </div>
        );
        return show
    }
    return (result !== null) ? _show() : null;
}
ItemsMenu.propTypes = {
    /**
     *  Display a list of items in s selectable list
     * 
     */
    /** result - object with list of items */
       result: PropTypes.object.isRequired,
    /** showMenu - if true scrollling menus are shown */
        showMenu: PropTypes.bool.isRequired,
    /** selected - currently selected item */
        selected: PropTypes.number.isRequired,
    /** onSelect - call back on select(index,name, result) */
        onSelect: PropTypes.func.isRequired
}
export default ItemsMenu;