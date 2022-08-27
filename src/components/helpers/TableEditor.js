
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
import SubmitDialog from './SubmitDialog';
import controls from '../controls';

function TableEditor (props) {
    const { onEdit, onScroll, onSave, status, appEnv} = props;
    const [modified, setModified] = useState(0);
    const [submitStatus, setSubmitStatus] = useState(false);
    const [reviewStatus, setReviewStatus] = useState(false);
    const appData = appEnv.appControl.appData;
    const form    = appData.form;
    let {defaultComponent, classes, visuals}  = form;
    let {columns } = appEnv.state;
    let data = [].concat(appEnv.state.data);
    let currentData = data;
    
    const menus = {
        prev  : {text: 'Previous',   action: 'prev',  disabled: false, state: false},
        next  : {text: 'Next', action: 'next', disabled: false, state: false},
        reset : {text: 'Reset', action: 'reset', disabled: false, state: false},
        submit: {text: 'Submit', action: 'submit', disabled: false, state: false},
        review: {text: 'Review', action: 'review', disabled: false, component: 'Switch', state: reviewStatus},
        
    };

    debugger;
    if (reviewStatus === true || (props.saveDialog === true && appEnv.appControl.editControl.handlers.review != null)) {
        let t = appEnv.appControl.editControl.handlers.review(data, appEnv);
        currentData = t;
        //currentData = (t.length > 0) ? t : data;
    };

    let order = (form.show.length > 0) ? form.show : Object.keys(columns);
    order = order.map(o => o.toLowerCase());
    if (classes == null) {
       classes = {};
    }

    const _onEdit = (e) => {
        if (props.preview === true || onEdit == null) {
            return;
        }
        data[e.rowIndex][e.target.name] = e.target.value;
        appEnv.state.data[e.rowIndex][e.target.name] = e.target.value;
        if (e.key !== 'Enter') {
            setModified(modified+1);
        } else {
            onEdit(e.target.name, e.target.value, e.rowIndex, data[e.rowIndex]);
        
        }
      };

    const _submitDialogClose = () => {
        setSubmitStatus(false);
    };

    const _onSelect = (action, flag) => {
        menus[action].state = flag;
        debugger;
        switch (action) {
            case 'next': 
            case 'prev': {
                onScroll(action); 
                break;
            }
            case 'save': {
                if (onSave !== null) {
                    onSave();
                }
                break;
            }
            case 'submit': {
                setSubmitStatus(true);
                break;
            }
            case 'review': {
                debugger;
                setReviewStatus(flag);
                break;
            }
            case 'reset': {
                onScroll('first');
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
            let kh = order[i];
            let c = columns[kh];
            let align = (c.Type === 'double' || c.Type === 'int') ? 'right' : 'left';
            let key = `${kh}col`;
            theadrow.push(<TableCell align={align} key={key}>{kh}</TableCell>);
        }
        return theadrow;
    };

    let thead = <TableHead>
        <TableRow>
            {_makeColHeader()}
        </TableRow>
    </TableHead>;

    // create the main table

    let bodyRows = currentData.map((currentRow, rowIndex) => {
        let oneRow = _makeOneRow(currentRow, rowIndex);
        return <TableRow key={rowIndex}>{oneRow}</TableRow>;
    });

    // return table
    let showTable =
        <div key="sdf" className={classes.divborder}>
            <h1>{form.title}</h1>
            {status !== null ? <h3> {status.msg}</h3> : null}
            {submitStatus === true ? <SubmitDialog key={Date()} data={data} appEnv={appEnv} closecb={_submitDialogClose}
                                                /> : null }
            <Grid container key="tableEditorMui" direction="column">
                {props.saveDialog !== true ? <ButtonMenuBar menus={menus} onSelect={_onSelect} ></ButtonMenuBar> : null}
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

export default TableEditor;
