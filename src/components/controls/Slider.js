import React, { Fragment } from 'react';

import { Slider as MuiSlider } from '@material-ui/core';

import Typography from '@material-ui/core/Typography';
// import { useAppContext } from '../../providers';

function Slider (props) {
  const { details, onEnter, controlProps, rowIndex, classes } = props;

  const key = details.name;
  /*
    let marks = [
        {value: controlProps.min, label: controlProps.min},
        {value: controlProps.max, label: controlProps.max}
    ];
    */
  // let scalefn = _scaleFn(controlProps.scale);

  const _onChange = (e, value) => {
    const synthE = {
      key   : 'Enter',
      rowIndex,
      target: {
        value,
        name: details.name
      }
    };
    onEnter(synthE, 'slider');
    return value;
  };

  const t = <Fragment>
        <Typography key={`${key}_label`} id={`${details.label}`} gutterBottom>
            {details.label}
        </Typography>
        <MuiSlider className={classes.slider}
        key={`${key}_slider`}
        value={props.value}
        aria-label={details.Label}
        aria-labelledby={details.Label}
        step={controlProps.step}
        min={controlProps.min}
        max={controlProps.max}
        marks={true}
        valueLabelDisplay="on"
        onChange={(event, value) => _onChange(event, value)}
    />
    </Fragment>;
  return t;
}
export default Slider;
