import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React, { useState, useLocation } from 'react';
import Grid from '@material-ui/core/Grid';
import FilterListIcon from '@material-ui/icons/FilterList';
import { Button } from '@material-ui/core';

import EventIcon from '@material-ui/icons/Event';
import ContinuousSlider from './ContinuousSlider';
import SettingsIcon from '@material-ui/icons/Settings';




function IntelParams (props) {
  
  const { onInput, classes } = props;

  const [ inputs, setInputs ] = useState(props.inputs)

  const onInputi = (name, value) => {
    let t = {...inputs};
    t[name] = value;
    setInputs(t);
  }

  const onSimulate = () => {
    onInput(inputs);
  }
 

  // this is equivalent to:
  // let onInput = props.onInput;
  // let params = props.params;

  let inputItems = props.inputs.map(item => {

    return (
        <Grid item xs>
              <Typography className={classes.title2} color="textPrimary" gutterBottom>
                  {item.label}
                  </Typography>
                  <TextField id={item.id} label={item.label} variant="outlined" value={item.value} required onChange={(e) => onInputi(item.name,e.target.value)}/> <FilterListIcon fontSize="large"/>
        </Grid>
    )
  
  })

    return (
      <div className={classes.root}>
        <Grid justify="center" container spacing={3}>
          {inputItems}
        </Grid>
        <Button variant="contained" color="primary" onClick={() => onSimulate()}>Simulate</Button>
      </div>
    )
  }
  
  
  
 
//   let location = useLocation();
    // let { initialTab, tabs } = location.state;
    // console.log(initialTab);
    // return <h1>{JSON.stringify(props.host,null,4)}</h1>

//   let { store, classes } = props;

export default IntelParams;
// /* =
// params = [
//     {name: x', label: 'this is a x", value: 10},

//     <A x="A" y={q}/>
//     ...
//     React does this:  let thisguysprop = {x: "A", y:  q};
//     react calls A (thisguysprop);
//     ...
//     function A(props){

//     }
// ]


// <div >
// <Grid container spacing={3}>
//   <Grid item xs>
//       <Typography className={classes.title2} color="textPrimary" gutterBottom>
//           What merchandise would you like to cluster?
//           </Typography>
//           <TextField id="1" label="Merchandise" variant="outlined" value={params.merchandise} required onChange={(e) => onInput("merchandise",e.target.value)}/> <FilterListIcon fontSize="large"/>

//       <Typography className={classes.title2} color="textPrimary" gutterBottom>
//               What locations would you like to cluster?
//           </Typography>
//           <TextField id="2" label="Locations" variant="outlined" value={params.location} required onChange={(e) => onInput("location",e.target.value)}/> <FilterListIcon fontSize="large"/>

//       <Typography className={classes.title2} color="textPrimary" gutterBottom>
//               What time frame would you like to use for historical sales?
//           </Typography>
//           <TextField id="3" label="Time Frame" variant="outlined" value={params.timeFrame} required onChange={(e) => onInput("timeFrame",e.target.value)}/> <EventIcon fontSize="large"/>
//   </Grid>

//   <Grid item xs>
//       <Typography className={classes.title2} color="textPrimary" gutterBottom>
//           What flavor of sales would you like to use?
//           </Typography>
//       <TextField id="4" label="Sales Flavor" variant="outlined" value={params.salesFlavor} required onChange={(e) => onInput("salesFlavor",e.target.value)}/>
//       <ContinuousSlider id="5" value={params.minMaxClusters} classes={classes} required onChange={(e) => onInput("minMaxClusters",e.target.value)}/> <SettingsIcon fontSize="large"/>
//   </Grid>
  

// </Grid>
