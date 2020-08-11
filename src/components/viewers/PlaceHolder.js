import React from 'react';
import { useParams } from 'react-router';

function PlaceHolder (props) {
  // static contextType = AppContext;
  debugger;
  let { name } = useParams();
  console.log(props);
  let show =
    <div id="page-wrap">
      <h2> Path is {name}</h2>
      <pre> {name + JSON.stringify(props, null, 4)} </pre>
    </div>;
  return show;
  }
export default PlaceHolder;
