# A Viya Web Application using react and restaf

---

## Introduction

---

This is a react-based application built with create-react-app

## Installation

```sh
git clone https://github.com/sassoftware/react-uidemos reactaapp -b reactapp
cd reactapp
npm install
```

## Configuration

1. Configure your Viya server as described in this [link](https://github.com/sassoftware/restaf/wiki/usefulTips).

2. Edit the .env file and set the appropiate values.

The default clientId information are:

- Oauth flow: authorization_code
- clientid: appcom
- secret: secret
- redirect_uri: <http://localhost:8000/viyaapp>

3.Set the VIYA_SERVER to your Viya URL (ex: https://....)

- Set an environment variable as follows

```sh
set VIYA_SERVER=<your viya server: ex: <http://myviyaserver.com>
```

Alternatively you can edit the .env file and add this information to it.

The last step is to build the default application.

```sh
npm run  buildapp
```

> The buildapp script does some necessary housekeeping before running the standard start script of create-react-app. So use buildapp to build the application

## Run the application

Now you are ready to run the default application.

Enter the following commands

```sh
npm run  app
```

At this point you should visit <http://localhost:8080/viyaapp>

```text
http://localhost:8080/viyaapp

```

---

## Adding your own applications

---

It is a simple process to get your application appearing in the application menu. This menu is acccessed via the hamburger menu in the application's banner. The default app takes care of all the routing and passing the correct props to your application's main component.

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

See providers/setupViya and App.js on how appContext is setup. 
---

### Step 2

---

Develop your main app component in the viewers directory. You can use any react library. By default this project installs @mui5.

```js
import React, {useContext} from 'react';
import {AppContext} from '../../provders';


function MyDemo(props) {
    const {store, classes} = useContext(AppContext);
    const {... your props from appMenu.js} = props;

    let total = n1 + n2;
    return <div className={classes.div}>
     <h1> {label} <h1>
     <p> {total} </p>
     </div>;
}
default export MyApp;
```

---

## Project Organization

---

The src directory has 3 key sbu directories

1. viewers -- this directory has the main entry of the applications selectable in the menu

2. helpers  -- this directory is designed to hold react components used by the viewers

3. lib      -- this directory is for code that is not UI related: Example: code to access Viya, data manipulations etc...

npm run buildapp will scan the viewers and helpers directory and create the index.js in each of these directories.
For every entry in viewers directory the application will create a route that can be referenced in the appMenu.js

## **Conclusion**

That is all there is to adding new application - no wiring of routes, servers, code for authentication etc...
Use your extra free time doing other interesting stuff.

---
