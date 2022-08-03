# Jump Start Data Editing in SAS Viya

This small react component library serves multiple purposes:

- Help build Data Entry Applications quickly with minimal effort
- Uses [@sassoftware/restafedit](https://github.com/sassoftware/restaf/blob/restafedit/README.md) to access CAS tables and support custom calculations.

    SAS Tables will be supported in the next version

<blockquote> React version

Designed to work with any  React version >= 16.

</blockquote>

---

## Install

---

```sh

npm install @sassoftware/viyaedit

```

### PeerDependencies

If your package manager does not install peer dependencies then install these manually.

```js
{
    "@sassoftware/restaf": ">= 4.4.8",
    "@sassoftware/restaflib": ">= 4.4.8",
    "@sassoftware/restafedit": ">= 0.11.0"
}

```

---

## Usage

---

DataEditor is the entry component

### Sample React Component

```jsx

<DataEditor viyaConnection={viyaConnection} appControl={appControl} editor={editorfunction}/>

```

Here is a link to a working [sample](https://github.com/sassoftware/restaf-uidemos/blob/editorappreact/src/components/viewers/Sample.js) that uses this. For convenience the code is included here.

```jsx

import React from 'react';
import helpers from '../helpers';
import {DataEditor} from '@sassoftware/viyaedit';

import Grid from "@material-ui/core/Grid";

function Sample (props) {

  // See below - moved it to a function for code readability
  let appControl = getAppControl();
  
  let viyaConnection = {
    host: 'https://myViyaServer.com',
    authType: 'code'
  }
  
  // Used as editor function
  const _editor = () => {
    return helpers['SampleForm']; 
  };

 // main call
  return (
    <div key={Date()}>
      <Grid container spacing={3} direction="row">
          <Grid item>
            <DataEditor key={Date()}
                  appControl={appControl} 
                  viyaConnection={viyaConnection}   
                  editor={_editor}  
                  />
          </Grid>
        </Grid>
    </div>
    
  );


//
// handlers for init, main, term and selected columns
//
async function init (data,row,appEnv,type) {
  let status = {code: 0, msg: `${type} processing completed`};
  data.total = data.x1 + data.x2 + data.x3 ;
  let newData = data; /* you can modify the incoming data and return it */
  return [newData, status];
};

async function term (data, type) {
  let status = {code: 0, msg: `${type} processing completed`};
  return [data, status];
};

async function x1 (data, value, name) {
let msg = {code: 0, msg: `${name} handler executed.`};
if (data.x1 > 10) {
    data.x1 = 10;
    msg = {code: 0, msg: "Exceeded Max. Value reset to max"};
}

return [data, msg];
};

// Application control for restafedit to use.

function getAppControl () {
  return {
      description: 'Simple Example',
      dataControl: {
        source: 'cas',
        table : {caslib: 'casuser', name: 'testdata'},
        access: {},
        byvars: ['id'],
        where : {},

        cachePolicy: true,

        initialFetch: {
          count : 1,
          from  : 1,
          format: false
        },

        customColumns: {
          total: {
            Column         : "Total",
            Label          : "Grand Total",
            FormattedLength: 12,
            Type           : "double"
            }
        },
        customRows: []
      },
      editControl: {
        handlers: {init: init, main: init, term: term, x1: x1}, 
        save    : true,  
        autoSave: true, 
    
      },
      appData: {}    /* put here whatever you want to pass to your editor component */
      
   };
  }

}
export default Sample;

```

## Props to DataEditor

### `viyaConnection`

Usually your app is running with authorization_code flow. So use this:

```js
{
    host: <your Viya server url>,
    authType: 'code'
}
```

Sometime, even with authorization_code you might want to use tokens. Then use this:

```js
{
    host: <your Viya server url>,
    authType: 'code',
    token: <your token>
    tokenType: 'bearer
}
```

### `AppControl`

This is the same appControl used with @sassoftware/restafedit (see [here](https://github.com/sassoftware/restaf/blob/restafedit/README.md))

### `editor`

This is a function that returns your editor component.
For example if your editor component(written with any react component library) MyEditor. See below for its props.

See these links for examples.

- [Sample Form Editor](https://github.com/sassoftware/restaf-uidemos/blob/editorappreact/src/components/helpers/SampleForm.js)

- [Form Editor](https://github.com/sassoftware/restaf-uidemos/blob/editorappreact/src/components/helpers/DataFormMulti.js)

- [Table Editor](https://github.com/sassoftware/restaf-uidemos/blob/editorappreact/src/components/helpers/TableEditorMui.js)

```js

const V = editorFunc();

```

The viyaedit component will use this prop as follows:

```js

const V = props.editor();

return (
      <Fragment>
            <V 
             onEdit={_onEdit}
             onScroll={_onScroll}
             onSave={_onSave}
             status={status}
             appEnv={appEnv}
             />
        </Fragment>

)
```

---  

## Details on the editor prop

---

The editor component needs to handle the following props

### onEdit

This callback will run your custom calculations and save the record to the server. The autosave is controlled by the option in appControl.
Typically you will call this after the user enters a value and presses enter or changes cursor focus.

To call it use this sample code:

```js
props.onEdit(
    name, /* name of the column */
    value, /* new value to be saved */
    rowIndex, /*index of the row. Between 0 and the number of records retrieve on last fetch */
    data, /* the data for the row */
    appEnv /* control object that was passed into your component */ 
```

#### onScroll

To scroll to previous or next record call this. This callback will retrieve new records from the server.

```js

props.onScroll(direction)

```

Direction can be 'first', 'prev', 'next'

#### onSave

Use this if you are not doing a autoSave on each edit

---

props.onSave(data, appEnv);

---

data is the current row

#### status

The status is returned by DataEditor. it is of the form

{
    status: 0|1|2,
    msg: <some string>
}

Could be null to indicate that there is no status to report

##### appEnv

This is the control object for the edit session. For details on this see @sassoftware/restafedit.  

This object is useful in more advanced use cases. See the documentation for @sassoftware/restafedit.
