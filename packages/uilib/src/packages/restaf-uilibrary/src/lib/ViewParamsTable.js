/*
 * ------------------------------------------------------------------------------------
 *   Copyright (c) SAS Institute Inc.
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 * ---------------------------------------------------------------------------------------
 *
 */

import React from "react";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table-next';
// import cellEditFactory from 'react-bootstrap-table2-editor';

//https://www.valentinog.com/blog/how-async-await-in-react/
class ViewParamsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      optimize: props.optimize,
      objType: props.objType
    };
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      data: nextProps.data,
      optimize: nextProps.optimize,
      objType: nextProps.objType
    });
  }

  componentDidUpdate () {
  
  }

  numFormatter = (cell, row) => {
    return Number(cell);
  }

  onBeforeSaveCell = (row, cellName, cellValue) => {
    if (isNaN(cellValue)) {
      alert('Invalid datatype. Please enter a number.')
      return false;
    }
  }

  handleClick = () => {
    debugger;
   
    debugger;
    if (this.state.objType) {
      this.state.optimize(this.state.data, this.state.objType)
    }
    else {
      alert('Please Select a Cost function!')
    }
  }

  onAfterSaveCell = (row, cellName, cellValue) => {
    debugger;
    let data = this.state.data;
 
    const result = data.map((r) => {
      if (row[ '_Index_' ] === r[ '_Index_' ]) {
        r[ cellName ] = Number(cellValue);
      }
      return r;
    });
    this.setState({
      data: result
    });
  }

  onAfterDeleteRow = (rowKeys) => {
    debugger;
    let data = this.state.data;
    debugger;
    const filtered = data.filter(r => r[ 'Product_Name' ] !== rowKeys[ 0 ]);
  
    this.setState({
      data: filtered
    });
  }

  render () {
    var selectRowProp = {
      mode: "checkbox",
      clickToSelect: true,
      bgColor: "rgb(238, 193, 213)"
    };

    const mycellEditProp = {
      mode: 'click',
      beforeSaveCell: this.onBeforeSaveCell,
      afterSaveCell: this.onAfterSaveCell
    };

    const options = {
      afterDeleteRow: this.onAfterDeleteRow
    };

    const radioSelection = (event) => {
      debugger;
      this.setState({
        objType: event.target.value
      });
    }
    debugger;
    return this._display()

  };

  _display = () => {
    return (
      <div>
        <h4>Enter the number of required facilities for each of the following operations: </h4>
        <BootstrapTable data={this.state.data}
          options={options}
          cellEdit={mycellEditProp}
          striped
          hover
          condensed
          search
        >
          <TableHeaderColumn width='50%' dataField='Product_Name' isKey dataAlign="center" dataSort={true} >Product Name</TableHeaderColumn>
          <TableHeaderColumn width='50%' dataField='demand' dataAlign="center" dataSort={true} dataFormat={this.numFormatter}>Required Number of Facilities</TableHeaderColumn>
        </BootstrapTable>
        <form>
          <h4>What type of cost would you like to minimize?</h4>
          <ul>
            <p>
              <label>
                <input
                  type="radio"
                  value="1"
                  name="myRadio"
                  checked={this.state.objType === "1"}
                  onChange={(e) => this.setState({ objType: e.target.value })} />
                Variable Costs Only
        </label>
            </p>
            <p>
              <label>
                <input
                  type="radio"
                  value="2"
                  name="myRadio"
                  checked={this.state.objType === "2"}
                  onChange={(e) => this.setState({ objType: e.target.value })} />
                Fixed Costs Only
        </label>
            </p>
            <p>
              <label>
                <input
                  type="radio"
                  value="3"
                  name="myRadio"
                  checked={this.state.objType === "3"}
                  onChange={(e) => this.setState({ objType: e.target.value })} />
                Total Cost (Fixed and Variable Costs)
        </label>
            </p>
          </ul>
        </form>
        <button class="btn btn-primary btn-block" type="submit" onClick={this.handleClick}> Optimize </button>
      </div>
    );
  }
}

export default ViewParamsTable;
