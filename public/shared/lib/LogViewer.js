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

'use strict';
class LogViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected    : null,
            store       : props.store,
            logLines    : null,
            handleChange: this.handleChange.bind(this),
            getLogLines : this.getLogLines.bind(this)
        };

    }
    componentWillMount() {
        this.updateState();
    }
    componentWillReceiveProps(nextProps) {
        this.updateState();
    }
    render() {
        debugger;
        return <div>
            <select value={this.state.selected} onChange={this.state.handleChange} onSelect={this.state.handleChange}>
                {this.state.store.submitStatus().map((JobId) => <option key={JobId} value={JobId}>{JobId}</option>)}
            </select>
            <div>{this.state.logLines}</div>
        </div>
    }
    updateState() {
        debugger;
        let {store, selected} = this.state;
        if ( store.submitStatus().size > 0 ) {
            if (selected === null) {
                selected = this.state.store.submitStatus().get(0);
            }
            this.state.getLogLines(selected);
        } else {
            selected = null;
        }
        this.setState( {selected: selected})
    }
    handleChange(e){
        debugger;
        console.log(e.target.value);
        this.state.getLogLines(e.target.value);
        this.setState({selected: e.target.value})
    }
    getLogLines(selected) {
        debugger;
        let currentJob = this.state.store.submitStatus(selected).job;
        this.state.store.apiCall(currentJob.links('log'))
            .catch(err => err)
            .then(folder => {
                let dataL = folder.items();
                let outAll = [];
                dataL.map((data, i) => {
                    let out;
                    let line = data.get('line').replace(/(\r\n|\n|\r)/gm, "");
                    if (line.length === 0) {
                        line = '  ';
                    }
                    let type = data.get('type');
                    if (type === 'title') {
                        out = <h2 key={i} className={type}> {line} </h2>;
                    } else {
                        out = <p key={i} className={type}> {line} </p>;
                    }
                    outAll.push(out);
                })
                this.setState( {logLines: outAll});
            })
    }
}