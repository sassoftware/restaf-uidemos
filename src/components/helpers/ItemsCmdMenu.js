/*
* Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/

import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function ItemsCmdMenu (props) {
    let { result, selected, onSelect, classes } = props;
    let newMenu = [];
    let menu = result.itemsCmd(result.itemsList(selected)).keySeq();

    if (menu.size === 0 ) {
        newMenu.push(<ListItem key={0} button  >
                        <ListItemText primary="None" />
                     </ListItem>)
    } else {
        menu.forEach((m, key) => {
            newMenu.push(
                <ListItem key={key} button onClick={() => onSelect(result.itemsCmd(result.itemsList(selected),m), m, result, selected)} >
                    <ListItemText primary={m} />
                </ListItem>)
        });
    }
    let show =
        <Fragment>
            <List component="nav" dense={true} className={classes.list}>
                {newMenu}
            </List>
        </Fragment>;

    return show;
}
ItemsCmdMenu.propTypes = {
    /** current result */
    result: PropTypes.object.isRequired,

/** Selection handler */
    onSelect: PropTypes.func.isRequired,

/** default classes */
    classes: PropTypes.object.isRequired

}
export default ItemsCmdMenu;

