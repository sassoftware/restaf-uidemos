import React, { Fragment } from 'react'
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function ScoreForm(props) {
    let { inputs, classes, onSelect } = props
    // let { inputs, name, restaflib, onSelect, classes } = props

    let show =
        <Fragment>
            <Button color="primary" onSelect={onSelect}>Get Inputs</Button>
            <List component="ul" dense={true} className={classes.list} >
                {inputs}
            </List>
        </Fragment>


    return show
}
