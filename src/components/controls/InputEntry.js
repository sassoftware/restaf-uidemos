import React , {Fragment} from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';


function InputEntry (props) {
    let {details, onEnter, controlProps, showLabel, rowIndex, classes} = props;
    let value = props.value;
    let disabled = (controlProps.disabled != null) ? controlProps.disabled : false;
    let key=details.name;
    
    
    let label = null;
    if (details.Type === 'double') {
        if (value == null || isNaN(value)) {
           value = ' ';
        }
        label = `${value} is incorrect`;
    };

    const _onChange = (e) => {
        
        let synthE = {
            key     : e.key,
            rowIndex: rowIndex,
            target  : {
                value: e.target.value,
                name : key
            }
        };
        onEnter(synthE);
    };
  
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
            onEnter(synthE);
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
        onEnter(synthE);
    };
    const inputProps = {
        inputMode : 'text',
        onKeyPress: _onKeyPress,
        onBlur    : _onBlur

    };
    // let className = (disabled === true) ? classes.inputDisabled : classes.input;
    let t = 
    <Fragment>
        {showLabel === true ? <InputLabel key={details.name} 
            htmlFor={key}>{details.Label}</InputLabel> : null}
        <Input
            key={`${key}_input`}
            id={key}
            value={value}
            type="text"
            className={classes.input}
            inputProps={inputProps}
            onChange={_onChange}
            disabled={disabled}
            size="small"
            placeholder={label}
            name={details.name}
            variant={disabled === true ? 'filled' : 'standard'}

        />
        </Fragment>;

    return t;
}
export default InputEntry;
