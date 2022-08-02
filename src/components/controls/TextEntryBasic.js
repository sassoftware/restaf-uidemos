import React, {Fragment} from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

function TextEntryBasic (props) {
    let {details, onEnter, controlProps, showLabel, rowIndex, classes} = props;
    let numlist = ['double', 'decimal', 'float', 'number'];


    let type = 'text';
    console.log(details.Type);
    let ix = numlist.findIndex(t => t === details.Type);
    if (ix >= 0 || details.Type === 'integer') {
        type = 'number';
    }
    console.log(type);
    const _onEnter = (e) => {
        
        let value = e.target.value;
        console.log(value);
        let synthE = {
            key     : e.key,
            rowIndex: rowIndex,
            target  : {
                name : e.target.name,
                value: e.target.value
            }
        };
        
        if (e.key === 'Enter') {
           onEnter(synthE);
        } 
    };

    const inputProps = {
        step: "any"
    };
    
    let disabled = (controlProps.disabled != null) ? controlProps.disabled : false;
    let key=details.name;
    let t = <Fragment>
        {(showLabel === true) ? <InputLabel key={details.name} htmlFor={key}>{details.Label}</InputLabel> : null}
        <OutlinedInput
            key={`${key}_input`}
            id={key}
            type="text"
            value={props.value}
            inputProps={inputProps}
           /* onChange={(e) => _onEnter(e, rowIndex, 'onchange')}*/
            onChange={_onEnter}
            className={classes.input}
            disabled={disabled}
            size="small"
            name={details.name}

        />
    </Fragment>;
    return t;
}
export default TextEntryBasic;
