/*
 * Copyright (c) SAS Institute Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 *
 */

//TBD: Change to function
import React from 'react';

class ItemsListViewer extends React.Component {
	constructor (props) {
		
		super(props);
		this.state = {
			store : props.store,
            folder: props.folder,
		};
	}

	render () {
		
		let { folder } = this.state;
		return (
			<div>
				{this.makeMenu(folder)}
				{this.makeTable(folder)}
			</div>
		);
	}

	doCommand (rel) {
		let { store, folder } = this.state;
		store
			.apiCall(folder.scrollCmds(rel))
			.then(f => this.setState({ folder: f }));
	}

	makeMenu (folder) {
		let { onClick } = this.state;
		let cmds = folder.scrollCmds();
		let menu = [];
		cmds.forEach((c, rel) => {
			menu.push(
				<button key={rel} onClick={this.doCommand(rel)} className="button">
					{' '}
					{rel}{' '}
				</button>
			);
		});
		return menu;
	}

	makeTable (folder) {
		let itemsList = folder.itemsList();
		return (
			<div className="idTable">
				<ul>
					{itemsList.map((m, i) => (
						<li key={i}> {m} </li>
					))}
				</ul>{' '}
			</div>
		);
	}
}

export default ItemsListViewer;

/*
    function ItemsListViewer ( store, folder, container ) {
        ReactDOM.render(<IdViewer store={store} folder={folder}/>,
                document.querySelector(container));
        return true;
    }
    */
