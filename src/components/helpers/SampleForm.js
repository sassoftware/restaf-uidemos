/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import controls from '../controls';
import Paper from "@material-ui/core/Paper";
import ButtonMenuBar from './ButtonMenuBar';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";


function SampleForm (props) {
  const { onEdit, onScroll, onSave, status, appEnv} = props;
  
  const [modified, setModified] = useState(0);

  let {columns, currentPage} = appEnv.state;
  let data = {...appEnv.state.data[0]};

  // define visuals here
  let form = {
    defaultComponent: "InputEntry",
    show            : ['id', 'total', 'x2', 'x1', 'x3'],
    classes         : {},
    title           : 'Editing data using forms',
    visuals         : {
      x2: {
        component: "Slider",
        props    : {
        min  : 0,
        max  : 50,
        steps: 1,
        },
      },
      total: {
        props: {
        disabled: true,
        },
      },
      id: {
        props: {
          disabled: true,
        },
      }
    }
  };
  
  let {defaultComponent, classes, visuals}  = form;

  const menuList = [
    {text: 'previous',   action: 'prev', disabled: (currentPage.from === 1)},
    {text: 'next', action: 'next', disabled: (currentPage.next === -1)},
    {text: 'Save', action: 'save', disabled: true }
];
  
  
  const _onEdit = (e) => {
   
    data[e.target.name] = e.target.value;
    appEnv.state.data[e.rowIndex][e.target.name] = e.target.value;
    if (e.key !== 'Enter') {
       setModified(modified+1);
    } else {
       onEdit(e.target.name, e.target.value, e.rowIndex, data, appEnv);
    }
  };

  let listNo = 0;
  let showlist = [[], [], []];
  

  let order = (form.show.length > 0) ? form.show : Object.keys(columns);
  for (let i=0; i < order.length ; i++) {
    let name = order[i];
    
    let dt = columns[name];
    let v = defaultComponent;
    if (visuals[name] != null && visuals[name].component != null) {
       v = visuals[name].component;
    }
    let V = controls[v];
    let attr = (visuals[name] == null) ? {} : visuals[name].props;
    if (attr == null) {
      attr = {};
    }
    
    let t = (
      <Grid item key={`${name}_grid`} zeroMinWidth xs={8}>
        <V
          value={data[name]}
          details={dt}
          onEnter={_onEdit}
          controlProps={attr}
          appEnv={appEnv}
          rowIndex={0}
          showLabel={true}
          classes={classes}
        />
      </Grid>
    );
    let listrow = (
      <ListItem key={dt.fieldkey} role="listitem">
        {t}
      </ListItem>
    );
    showlist[listNo].push(listrow);
    listNo = (listNo ===2) ? 0 : listNo + 1;
  }

  const _onSelect = (selection) => {
    
    switch (selection.action) {
        case 'prev': 
        case 'next': {
            
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
  let finalList = showlist.map((show1, i) => {
    let s = (
      
      <Grid key={`listbox${i}`}>
        
        <List key={`${i}list`} className={classes.list} dense component="div" role="list">
          {showlist[i]}
        </List>
      </Grid>
    );
    return s;
  });

  let show = (
    <Paper>
      <div key="sdf" className={classes.divborder}>
        <h1> {form.title}</h1>
        {status !== null ? <h3> {status.msg}</h3> : null}
      <ButtonMenuBar menuList={menuList} onSelect={_onSelect} ></ButtonMenuBar>
        <Grid container key={"finaList"} direction="row">
          {finalList}
        </Grid>
      </div>
    </Paper>
  );

  return show;
}

export default SampleForm;
