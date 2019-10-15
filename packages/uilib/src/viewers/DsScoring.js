/* eslint-disable no-unused-vars */
/*
 * Copyright © 2019, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import  { useState, useEffect, useContext, useRef } from 'react'; 
import slsExecute from '../lib/slsExecute';
// import {AppContext} from '../providers';
import ShowSelectors from '../helpers/ShowSelectors';
import EditScenario from '../helpers/EditScenario';
import ShowScore from '../helpers/ShowScore';

import { ServerStyleSheets } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid'

function DsScoring(props) {

  // const appContext = useContext(AppContext);

  /*
  let appEnv = appContext.viya.appEnv;
  let store = appContext.store;
  debugger;
  */
  
 
  /*
   * planned process;
   * Initialize the selectors based on incoming filter
   * When user selects some condition and says describe retrieve the default values into scenario
   * When user says score - run the scenario and load result into scenarioResult
  
  */

  // const [routePath, setRoutePath] = useState(props.match.path);
  const [selectorValues, setSelectorValues] = useState(null);
  const [selectedValues, setSelectedValues]  = useState({});
  const [initialValues, setInitialValues] = useState(null);
  const [scenarioResult, setScenarioResult] = useState(null);
  const [modelName, setModelName] = useState(props.model.name);

  let {store, model} = props;
  // const [scenarios, setScenarioValues] = useState(null)
  const [errors, setErrors] = useState('loading...');
  debugger;


  /*
  let modelIndex = appEnv.models.findIndex( (l => l.route === props.match.path));
  let model = appEnv.models[modelIndex];
  let subsetVars = model.explainVars.map( s => s.toLowerCase());
  model.explainVars = subsetVars;
  */

  debugger;


  const lastModel = useRef(null);

  useEffect(() => {
      lastModel.current = props.model.name;
  });


  // get initial values
  useEffect(() => {
  
    // get list of states and years - currently no refresh

    debugger;
   
    // setSelectedValues(null);
    setInitialValues(null);
    setScenarioResult(null);

    setErrors('...Retrieving filter information');
    slsExecute('selectors', store, model, {})
      .then(casResults => {
        debugger;
        let selectors = {};
        let defaultSelection = {};
        for (let idvar in casResults){
          selectors[idvar] = makeSelectionList(casResults[idvar])
          defaultSelection[idvar] = '';
        }
        setSelectorValues(selectors);
        setSelectedValues(defaultSelection);
        console.log(selectedValues);
        setErrors(null);
        debugger;
      })
      .catch(err => {
        debugger;
        setErrors(JSON.stringify(err));
      });
      
    const makeSelectionList = (invalue) =>  {
      let type = typeof invalue[0] === 'number' ? 'number': 'text';
      let options = invalue.map( v => {
        return { value: v, label: v, type: type};
      })
      return options;
    };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modelName, props.model]);

    function handleChange (event) {
      console.log(event.target.name);
      console.log(event.target.value);
      let type = selectorValues[event.target.name][0].type;
      let value = (type === 'number') ? parseFloat(event.target.value) : event.target.value;
      setSelectedValues(
        {
          ...selectedValues,
          [event.target.name]: value
        }
      )

      }

  const onDescribe = () => {
    setErrors('...Running');
    console.log(selectedValues);
    debugger;
    slsExecute('describe', store, model, {filter: selectedValues})
    .then(casResults => {
      let t = describeData(casResults);
      console.log(t);
      setInitialValues(t);
      setErrors(null);
      debugger;
    })
    .catch(err => {
      debugger;
      console.log(err);
      setErrors(JSON.stringify(err));
    });
  }

  function describeData(casResults) {
    let oldrow = casResults.describe[0];
    let describe ={};
    for ( let k in oldrow) {
      let kl= k.toLowerCase();
      describe[kl] = oldrow[k];
    };

    let editRow = {};
    model.explainVars.forEach(k =>  {
      editRow[k] = describe[k];
    });

    return {describe: describe, editRow: editRow} 
  }

  const getNewValues = (newValues) => {
    // let scenario = {...initialValues.describe, ...newValues};
    let scenario = {...newValues};
    console.log(scenario);
    setErrors('...Running');
    setScenarioResult(null);
    debugger;
    slsExecute('score', store, model, {scenario: scenario})
    .then(casResults => {
         let results  = casResults[0];
         let scoreVar = model.scoreVar.toLowerCase();
         let score;
         for (let k in results) {
             if (k.toLowerCase() === scoreVar) {
             score = results[k];
             }
         };
      console.log(score);
      setScenarioResult(score);
      setErrors(null);
      debugger;
    })
    .catch(err => {
      debugger;
      setErrors(JSON.stringify(err));
    });
  }
  let show =
  <Grid container spacing={2} >
    <Grid item xs={12}>
      <Grid container justify="center" spacing={2}>
        <Grid key={1} item>
          <ShowSelectors selectors={selectorValues}  selectedValues={selectedValues}
                        handleChange={handleChange} onSubmit={onDescribe}/>
          {errors}
         
        </Grid>
        {(initialValues !==null) ? 
           <Grid key={2} item>
              <EditScenario data={initialValues.editRow} setScenario={getNewValues} />
          </Grid> : null }
        {( scenarioResult !== null) ? 
           <Grid key={3} item>
             <ShowScore model={model} score={scenarioResult}/>
            </Grid> : null }
      </Grid>
    </Grid>
  </Grid>

  return show;
}

export default DsScoring;