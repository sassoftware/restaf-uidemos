/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import IntelParams from '../helpers/IntelParams';
import FormControl from '@material-ui/core/FormControl';
function ScoreContainer (props) {



  let { store, classes } = props;

  let [ params, setParams ] = useState({
    session : null,
    inputs  : [

      {
          label   : "Merchandise",
          prompt  : "What merchandise would you like to cluster?",
          id      : 1,
          value   : ' ',
          name: "merchandise",
    
      },
    
      {
          label   : "Locations",
          prompt  : "What locations would you like to cluster?",
          id      : 2,
          value   : ' ',
          name: "location",
    
      },
    
      {
          label   : "Time Frame",        
          prompt  : "What time frame would you like to use for historical sales?",
          id      : 3,
          value   : 1,
          name: "timeFrame",
      },
    
      {
          label   : "Sales Flavor",
          prompt  : "What flavor of sales would you like to use?",
          id      : 4,
          value   : ' ',
          name: "salesFlavor",
    
      },
     
  ]
});

    const onInput = (newVal) => {
      let t = {...params};
      t.inputs = newVal;
      setParams(t);
      console.log(newVal)
      //  Will be calling CAS
    }
  
  
  console.log(props);


  return (
    <FormControl>
      <IntelParams onInput={onInput} inputs={params.inputs} classes={classes}/>
    </FormControl>    
  );
}

export default ScoreContainer





// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//       backgroundColor: '#cdecff',
      
  
//       Grid: {
//         justify: 'center',
//       }
//     },
//     paper: {
//       padding: theme.spacing(2),
//       textAlign: 'center',
//       color: theme.palette.text.secondary,
//     },
//   }));
  
//   const ScoreCardGrid = () => {
//     const classes = useStyles();
  
//     return (
//       <div className={classes.root}>
//         <Grid justify='center' container spacing={3}>
//           <Grid item md={6}>
//           <ContinuousSlider />                 
//           </Grid>
//           <Grid item md={6}>
//           <FixedParams /> 
//           </Grid>
//         </Grid>
//       </div>
//     );
//   }
  
//   export default ScoreCardGrid;