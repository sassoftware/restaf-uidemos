# viyaapi - Sample api server for SAS Viya

This is a simple example of using viya-apiserverjs to creat an api server. 
> Docker and K8s
The repository comes with a sample docker-compose file and configurations for deploying on k8s.

## `Creating the project`

```sh
git clone https://github.com/sassoftware/restaf-uidemos -b viyaapi 
cd viyaapi
npm install
```

## `Configuring the default setup`

As always you have to do some setup thru the .env and Dockerfile in the project directory.

To get going I recommend the following:

1. Register a clientid with a secret with the value *secret*.

The details on the clientid I use are shown below.
Note the grant-types and redirect_uri

```js
{
  scope: [ 'openid', '*' ],
  client_id: 'myapi',
  resource_ids: [ 'none' ],
  authorized_grant_types: [ 'password', 'authorization_code', 'refresh_token' ],   
  redirect_uri: [
    'http://localhost:8080/viyaapi/api',
    'http://localhost:8080/viyaapi/logon'
  ],
  autoapprove: [ 'true' ],
  access_token_validity: 86400,
  authorities: [ 'uaa.none' ],
  'use-session': true,
  lastModified: 1609727686858,
  required_user_groups: []
}
```

2.Configure the *.env* file

```env
VIYA_SERVER=http://cool.fbi.sashq-d.openstack.sas.com
```

If you are using a different client and clientsecret than the default then set those values in the .env file

## `Starting the server`

Issue this command

```sh
npm start
```

To run the server under nodejs debugger issue this commad

```sh
npm run debug
```

## Now try it out using swagger, POSTMAN or applications

### `Swagger`

Access swagger. For the default application it is [http://localhost:8080/viyaapi/api]
You will be prompted for userid and password. On successful authentication the swagger for your routes will be displayed. You can then access all your routes without any further authentication.

### `Postman`

Get a token using your usual magic dust and then access the end points.

### `Application`

Access the end points from a authenticated browser session. In this case the server will provide a token to your handler

## `Developing your REST API`

> All the handlers must be in the handlers directory

### `Jump starting your handlers`

Recommend that you adopt the samples in the handlers directory. The examples cover common use cases

1. Running sas jobs.
2. Running casl code.
3. Running cas actions.

### `Recommended Policies`

These are just recommendations to make it easier for others to follow your logic. It is not essential.

- Name the handler the same as the route where possible.
- Export all the handlers thru handlers/index.js

### `Quick Overview of handlers`

Each handler will look like this:

```js
module.exports = async function functionName(req,h){
    const context = req.pre.context;
    let {token, host} = context;

    ...
    <your code  - use the token and host to make your calls to Viya using REST APIs>
    ...

    return something;  /* The function must return either a promise or a value/object */
}
```

### `Parameters`

- req -- The request object from hapi. This has all the incoming information. Some of them are also available thru the context object

- h -- This object is used to send responses back. If you are returning simple object(string, js object) then you will just return that and not use h. But if you want to return special headers, status codes etc thne use h.

### `Context object`

The schema of context object is:

```js
{
    token:  /* bearer yourtoken */
    host : your viya server 
    path : path used to access this handler
    params: An array of the values of params --if the {params*} was part of the route specification
    query: Any query parameter as an js object
    payload: Any payload if the method is POST or PUT
}
```

## `Examples`

For examples using restaf to access Viya see the handlers in this directory

### `A simple example`

Below is an example using axios calling the file service.

```js
let axios = require('axios'){
async function simpleExample(req,h) {
    const context = req.pre.context;
    let {token, host} = context;
    
    let config = {
        method: 'GET'
        url: `${host}/files/files`,
        headers: {
          authorization: token
        }
    }

    let result = await axios(config);
    return result.data;

}
```

### `Using compute service`

A more complete example for accessing compute service. See
[https://github.com/sassoftware/restaf/wiki](for documentation on restaf and restaflib)

```js
let restaflib = require('@sassoftware/restaflib');
let setupConnection    = require('../lib/setupConnection');   
let fs = require('fs').promises;
module.exports = async function coolstuff (req,h) {
    return run(req,h) 
        .then (r => {return r;})
        .catch(err => {
            return err;/* need to add Boom support */
        });
};
async function run (req,h) {
    let { computeSetup, computeRun } = restaflib;
    let context = req.pre.context;
    let store = await setupConnection(context);
    let computeSession = await computeSetup(store, null, null);
    let f = context.path.split('/');

    let fname = `./pgm/${f[2]}.sas`;
    let src = await fs.readFile(fname, 'utf8');
    let computeSummary = await computeRun(
        store,
        computeSession,
        src,
        context.payload.input,
        15,2  /* just a place holder values for checking job status */
    );
    let log = await restaflib.computeResults(store, computeSummary, 'log');
    await store.apiCall(computeSession.links('delete'));
    // just return log for the example
    return log;

};
```

### `Context`

The context object is accessed as follows:
let context = req.pre.context;

```js
{
  token: The token you can use in the handler to access SAS Viya
  path: The path of the current route (ex: /myip/casAction)
  payload: The payload for the current call
  query: The query parameter as an java script object
  params: The path in an array - if url is /myip/a/b then params will be ['a', 'b']
}
```

The key item is context.token that you will need to make calls to Viya. The other keys and headers can be accesed via the request(req in the examples) object. So you can use the conetx object of the req object.

```js
req.payload  -- the payload sent on a POST call
req.qs       -- the query parameter in an object 
req.path     -- ex myapi/a/b
req.params   -- if the path was http://localhost:5000/myapi/a/b then params is ['a', 'b'];
req.path     -- ex myapi/a/b
req.headers  -- the current header
```

### `Server information`

host(viya server url)  - Access via process.env.VIYA_SERVER

### `Caching`

While the underlying framework is capable of supporting caching in memory I would like to hold off on discussing this capability at this point of development since REST API's are supposed to be stateless.

### `Returning results`

Every handler must have a return value. Please hapi documentation for the rules of the road. hapi gives you a lot of control.

### Steps

1. First add your route to api.js
2. Use one of the other routes in api.js as a guide - also refer to the hapi documentation
3. Add your handler in the handlers directory.
4. Now bring up the server and test the new route using Swagger.
5. Also add a test to the test directory - this package uses Jest.

> In the handler you can call any service (Viya or others). You will notice that I follow a certain pattern in my examples. Pick your own programming style.

### `Testing using jest`

jest is not installed by default since the current version still uses deprecated request.js. If you want to use it, install it.
The package uses Jest to create tests. Please see the test directory for examples. To avoid storing your password in the test scripts create a token and save it in a file. Then set the environment variable TOKENFILE with the path to this file.

```sh
npm test
```
