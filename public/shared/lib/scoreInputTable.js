/*
 *  ------------------------------------------------------------------------------------
 *  * Copyright (c) SAS Institute Inc.
 *  *  Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  * http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  *  Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  limitations under the License.
 * ----------------------------------------------------------------------------------------
 *
 */

class AscoreViewer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Scoring Input',
			data : props.inputVars,
			name: props.name,
		};
	}
	componentWillReceiveProps(nextProps) {
		this.setState({ data: nextProps.data, name: nextProps.name });
	}
	render() {
		let { data, name } = this.state;

		let columnInfo = columns.map((c) => {
			return {
				Header: c,
				accessor: c,
				headerStyle: {
					textAlign: 'left',
					backgroundColor: 'lightgray',
				},
			};
		});

		return (
			<div>
				{' '}
				<table class="table table-striped">
					<thead>
						<tr>
							<th scope="col"> {this.state.title} </th>
						</tr>
					</thead>
					<tbody>
						{rr.map((v, i) => (
							<tr scope="row">
								{' '}
								<td> {rr.name} </td>
                                <td>{rr.value} </td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

function ascoreTable(data, name, container) {
    ReactDOM.render(<AscoreViewer data={data} name={name} />, document.querySelector(container));
	return true;
}
