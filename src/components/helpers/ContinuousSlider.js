/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


function ContinuousSlider (props) {
  const { classes } = props;
  const [ value, setValue ] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.title2} color="textPrimary" gutterBottom>
            Min/Max Clusters
        </Typography>
      {/* <Grid container spacing={2}>
        <Grid item xs> */}
          <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
        {/* </Grid>
      </Grid> */}
    </div>
  );
}

export default ContinuousSlider;
