/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function getValue(props) {
  const {data, designMode} = props.sharedProps;

  let {handlers} = props;
  
  let replacer = {};
  
  replacer.value = (data[0][props.name] != null) ? data[0][props.name] : props.value;

  // resolve the values thru the functions
  
  let dataProps = (handlers.dataProps != null) ? handlers.dataProps(data[0], props.name, 0, props.sharedProps.appEnv) : {};

  replacer = {...replacer, ...dataProps};
 
  if (dataProps.hasOwnProperty('value') === true) {
    data[0][props.name] = dataProps.value;
  }
  /*
  if (replacer.value == null) {
    replacer.value = props.value;
  } 
  */
  replacer.refresh = (dataProps.hasOwnProperty('refresh') === true && dataProps.refresh === true) ? Date.now() : false;
  let newProps = {...props, designMode: designMode, ...replacer, dataProps: dataProps};
  /*
  if (replacer.hasOwnProperty('reload') === true && replacer.reload === true) { 
    newProps.refresh = !newProps.refresh;
  }
  */
  return newProps;
}
export default getValue;