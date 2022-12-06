/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useAppContext} from '../../providers';


function PropertyTable (props) {
    let { summary} = props;
    let {classes} = useAppContext();
   
    let thead = <TableHead>
        <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Value</TableCell>
        </TableRow>
    </TableHead>;
  

  const _makeString = (p, v) => {
    let d;
    if (Array.isArray(v) === true) {
        if (typeof v[0] === 'string') {
            d = v.join(',');
        } else if (p === 'properties') {
            let t = v.map((t1) => {
                return `${t1.name}: ${t1.value}`;
            });
            d = t.join(',');
        }
    } else if (typeof v === 'object') {
        d = JSON.stringify(d, null, 4);
    } else {
        d=v;
    }
    return d;
}

    let rows = [];
    for (let p in summary) {
        let v = _makeString(p, summary[p]);
        let r = <TableRow key={p}>
            <TableCell component="th" scope="row">{p}</TableCell>
            <TableCell align="left">{v}</TableCell>
        </TableRow>
        rows.push(r);
    }
    
  
    let show = <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                    {thead}
                    <TableBody>{rows}</TableBody>
                  </Table>
                </TableContainer>

    return <Fragment>
                   {show}
               </Fragment>;

}

PropertyTable.propTypes = {
    /** JSON object of item Summary property returned via Viya REST API */
    summary: PropTypes.object.isRequired
}
export default PropertyTable;
