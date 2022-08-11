
import React, {useState} from "react";
// import { useAppContext } from "../../providers";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import ButtonMenuBar from './ButtonMenuBar';
import controls from '../controls';

function TableEditorMui (props) {
    const { onEdit, onScroll, onSave, status, appEnv} = props;
    const [modified, setModified] = useState(0);
    const appData = appEnv.appControl.appData;
    const form    = appData.form;
    let {defaultComponent, classes, visuals}  = form;
    let {columns } = appEnv.state;
    let data = [].concat(appEnv.state.data);
    
    const menuList = [
        {text: 'previous',   action: 'prev', disabled: false},
        {text: 'next', action: 'next', disabled: false},
        {text: 'Save', action: 'save', disabled: true }
    ];
    let order = (form.show.length > 0) ? form.show : Object.keys(columns);

    const _onEdit = (e) => {
        data[e.rowIndex][e.target.name] = e.target.value;
        appEnv.state.data[e.rowIndex][e.target.name] = e.target.value;
        if (e.key !== 'Enter') {
            setModified(modified+1);
        } else {
            
            onEdit(e.target.name, e.target.value, e.rowIndex, data[e.rowIndex]);
        }
      };

    const _onSelect = (selection) => {
        switch (selection.action) {
            case 'next': 
            case 'prev': {
                onScroll(selection.action); 
                break;
            }
            case 'save': {
                if (onSave !== null) {
                    onSave();
                 }
                  break;
                }
            default: break;
    
        }
    };
  
    // create a single row for the table

    const _makeOneRow = (currentRow, rowIndex) => {

        let rowDisplay = [];
        for(let i=0; i < order.length; i++) {
            let k = order[i]; 
            let type = columns[k].Type;
            let align = (type === 'double' || type === 'int') ? 'right' : 'left';
            let key = `${k}${rowIndex}`;

            let v = defaultComponent;
            if (visuals[k] != null && visuals[k].component != null) {
                v = visuals[k].component;
            }
            let attr = {};
            if (visuals[k] != null && visuals[k].props != null) {
                attr = visuals[k].props;
            }
            let V = controls[v];

            let cellObj = <V
                value={currentRow[k]}
                details={columns[k]}
                onEnter={_onEdit}
                controlProps={attr}
                appEnv={appEnv}
                rowIndex={rowIndex}
                showLabel={false}
                classes={classes}
            />;
            rowDisplay.push(<TableCell className={classes.tableCell} key={key} align={align}>{cellObj}</TableCell>);
        }
        return rowDisplay;
    };

    // create table Header
    const _makeColHeader = () => {
        let theadrow = [];
        for (let i=0; i < order.length ; i++) {
            let k = order[i];
            let c = columns[k];
            let align = (c.Type === 'double' || c.Type === 'int') ? 'right' : 'left';
            let key = `${k}col`;
            theadrow.push(<TableCell align={align} key={key}>{k}</TableCell>);
        }
        return theadrow;
    };

   

    let thead = <TableHead>
        <TableRow>
            {_makeColHeader()}
        </TableRow>
    </TableHead>;

    // create the main table

    let bodyRows = data.map((currentRow, rowIndex) => {
        let oneRow = _makeOneRow(currentRow, rowIndex);
        return <TableRow key={rowIndex}>{oneRow}</TableRow>;
    });

    // return table
    let showTable =
        <div key="sdf" className={classes.divborder}>
            <h1>{form.title}</h1>
            {status !== null ? <h3> {status.msg}</h3> : null}
            <Grid container key="tableEditorMui" direction="column">
                <ButtonMenuBar menuList={menuList} onSelect={_onSelect} ></ButtonMenuBar>
                <Grid container key={"tableList"} direction="column">
                    <TableContainer classes={classes.tableContainer} component={Paper}>
                        <Table size="small" aria-label="a dense table">
                            {thead}
                            <TableBody>{bodyRows}</TableBody>
                        </Table>
                    </TableContainer>;
                </Grid>
            </Grid>
        </div>;
    return showTable;

}

export default TableEditorMui;
