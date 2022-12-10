# A Viya Web Application using react and restaf

---

## Introduction

---

This is a react-based application built with create-react-app. You can build applications for SAS Viya
without worrying about wiring of routes, code for authentication etc. Use the [restaf, restaflib and restafedit libraries](https://sassoftware.github.io/restaf) for easy access to SAS Viya.

Use your extra free time doing other interesting stuff.

## Installation

```sh
git clone https://github.com/sassoftware/react-uidemos reactaapp -b reactapp
cd reactapp
npm install
```

---

## Configuration

---

### Server Configuration

Configure your Viya server as described in this [link](https://github.com/sassoftware/restaf/wiki/usefulTips).

### .env files

1. .env.development - for development
2. .env.production - for production (i.e run with optimized code)

### ClientID

1. Development: An implicit flow clientid. This allows the use of Hot Module Replacement(HMR)
2. Production : An authorization_flow clientid

The default implicit clientID information are:

```js
{
  scope: [ 'openid', '*' ],
  client_id: 'clientappi',
  resource_ids: [ 'none' ],
  authorized_grant_types: [ 'implicit' ],
  redirect_uri: [ 'https://localhost:5000/index.html' ],
  autoapprove: [ 'true' ],
  access_token_validity: 86400,
  authorities: [ 'uaa.none' ],
  'use-session': true,
  lastModified: 1670622655179,
  required_user_groups: []
}
```

The default authorization_flow clientid

```js
{
  scope: [ 'openid', '*' ],
  client_id: 'clientapp',
  // clientSecret: 'secret'
  resource_ids: [ 'none' ],
  authorized_grant_types: [ 'authorization_code', 'refresh_token' ],
  redirect_uri: [
    'https://localhost:5000/viyaapp',
  ],
  autoapprove: [ 'true' ],
  access_token_validity: 86400,
  authorities: [ 'uaa.none' ],
  'use-session': true,
  lastModified: 1670513824451,
  required_user_groups: []
}

```

### Viya URL (VIYA_SERVER)

Option 1:   Set(export) the value as a environment variable. This prevents accidental push of the url to github

Option 2: Set it directly in the .env files

### Building and Running app

Use create-react-app standard start and build commands

### Testing the final build

```sh
npm run app
```

---

## Adding your own React component(Application)

---

The src directory has 3 key sbu directories

1. viewers -- this directory has the main entry of the applications selectable in the menu

2. helpers  -- this directory is designed to hold react components used by the viewers

3. lib      -- this directory is for code that is not UI related: Example: code to access Viya, data manipulations etc...

>
It is a simple process to get your application appearing in the application menu. Every entry exported from src/viewers/index.js will appear as a selection in the hanburger menu in the application's banner. The default app takes care of all the routing and passing the correct props to your application's main component.

![Quick start](https://github.com/sassoftware/restaf/blob/2.0.0/images/viya-app.png)

---

### Step 1

---

 Edit appMenus.js and add your application as a menu item. Your application will be displayed in the order it appears in the menu. The format of a menu item is:  

Let us assume that your new component is called Mydemo.js

```atom
{
    component: 'MyDemo',
    hide: false,  /* if not specified it defaults to false */
    props    : {
        text: 'Total of two numbers',/* text used in the application menu */
        n1: 10,
        b2: 20
    },
}
```

The component name must match the name of the component you will create in Step 2.
The props are specific to your component. Typically these are configuration information to make your application work correctly. These will be passed to the component as normal props.

The text will appear as the selection in the menu displayed by Home.js

At times you want to hide an application from users while you are working on it. Set hide to true in the menu. It defaults to false if not specified.

These are accessed as usual:

 ```js
function MyDemo(props) {
    const {text, n1,b2} = props;
    ...
}
```

### AppContext

The context named AppContext has information that is useful across all applications.
To get access to this context use the standard React practices.
The context is defined in the src/providers folder.

```js
import React, {useContext} from 'react';
import {AppContext} from '../../providers';
// The common ones you will need in your application are
let {classes, store, appEnv, logonPayload} = useAppContext();
```

See providers/setupViya and index.js on how appContext is setup and used.

---

### Step 2

---

Develop your main app component in the viewers directory. You can use any react library. By default this project installs @mui5.
Export the entry thru src/viewers/index.js

```js
import React, {useContext} from 'react';
import {AppContext} from '../../provders';


function MyDemo(props) {
    const {store, classes} = useContext(AppContext);
    const {text, n1,n2} = props;

    let total = n1 + n2;
    return <div>
     <h1> {text} <h1>
     <p> {total} </p>
     </div>;
}
default export MyApp;
```

### Step 3 Supporting components

If you create additional components(helper) add them to src/helpers directory. Do not forget to update the index.js file in that folder. Not a rigid requirement, but see the next section for some advantages.

### Auto building the index.s in viewers and helpers folder

Run the command below to add automatically build the index.js files in /src/viewers and /src/helpers folders.

This will scan the viewers and helpers directory and create the index.js in each of these directories.
For every entry in viewers directory the application will create a route that can be referenced in the appMenu.js

```sh
npm run buildapp
```

 You have to run this command only when you add something new to the viewers or helpers folders.If you want to extend this to other folders modify createRoutes.js

---

## **Conclusion**

That is all there is to adding new application - no wiring of routes, servers, code for authentication etc...
Use your extra free time doing other interesting stuff.

---
