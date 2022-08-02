import React, {Fragment} from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

function TextEntry (props) {
    let {details, onEnter,  controlProps, rowIndex, showLabel, classes} = props;

    let key = details.name;
    let type = (details.type === 'decimal') ? 'number' : details.type;
  
    const _onKeyPress = (e) => {
        
        if (e.key === 'Enter') {
            let synthE = {
                key     : 'Enter',
                rowIndex: rowIndex,
                target  : {
                    value: e.target.value,
                    name : key
                }
            };
            onEnter(synthE, '_onPressKey');
        }
        return true;
    };
    const _onBlur = (e) => {
        let synthE = {
            key     : 'Enter',
            rowIndex: rowIndex,
            target  : {
                value: e.target.value,
                name : key
            }
        };
        onEnter(synthE, '_onPressKey');
    };
    const inputPropsDecimal = {
        inputMode: 'decimal',
        step     : "any"
    };
    const inputPropsDefault = {
        inputMode : (type === 'string' || type === 'varchar') ? 'text' : 'numeric',
        onKeyPress: _onKeyPress

    };

    let disabled = (controlProps.disabled != null) ? controlProps.disabled : false;
    let t = <Fragment>
        {showLabel === true ? <InputLabel key={details.name} htmlFor={key}>{details.Label}</InputLabel> : null}
        <OutlinedInput
            key={`${key}_input`}
            id={key}
            type={type}
            value={props.value}
            inputProps={(details.type === 'decimal') ? inputPropsDecimal : inputPropsDefault}
            onChange={(e) => onEnter(e, rowIndex, 'onchange')}
            onBlur= {(e) => _onBlur(e)}
            className={classes.input}
            disabled={disabled}
            size="small"
            name={details.name}

        />
    </Fragment>;
    return t;
}
export default TextEntry;
