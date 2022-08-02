# A Quick start for Data Editing in SAS Viya - 

This small react component library serves two purposes:

- Help build Data Entry Applications 
- Demonstrates usage of @sassoftware/restafedit to manage reading, updating and writing data for CAS Tables.
    SAS Tables will be supported in the next version

## React version

Should work with any  React version >= 16

### Install

```sh

npm install @sassoftware/viyaedit

```

### PeerDependencies

If youy package manager does not install peer dependencies then install these manually.

```js
{
    "@sassoftware/restaf": ">= 4.3.0",
    "@sassoftware/restaflib": ">= 4.3.0",
    "@sassoftware/restafedit": ">= 0.10.0"
}

```

## Usage:

DataEditor is the entry component

### Sample React Component

```js

<DataEditor viyaConnection={viyaConnection} appControl={appControl}/>

```

## Props to DataEditor

### viyaConnect

Usually your app is running with authorization_code flow. So use this:

```js
{
    host: <your Viya server url>,
    authType: 'code'
}
```

Sometimes even with authorization_flow you might want to use tokens. The use this:

```js
{
    host: <your Viya server url>,
    authType: 'code',
    token: <your token>
    tokenType: 'bearer
}
```

### AppControl

This is the same appControl used with @sassoftware/restafedit with an additional section for the editor component you will supply
