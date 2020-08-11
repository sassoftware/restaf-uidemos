import React from 'react';
import { useParams } from 'react-router';

function TestStuff (props) {
	debugger;
	let { name } = useParams();
	let show = (
		<div>
			<h2> PlaceHolder for {name}</h2>
			<pre> {name + JSON.stringify(props, null, 4)} </pre>
		</div>
	);
	return show;
}

export default TestStuff;
