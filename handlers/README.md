# All handlers go here

## `Recommended Policies`

These are just recommendations to make it easier for others to follow your logic. It is not essential.

- Name the handler the same as the route where possible.
- Export all the handlers thru index.html

## `Quick Overview of handlers`

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

## Examples

For examples using restaf to access Viya see the handlers in this directory

### A simple example

Below is an example using axios calling the file service.

```js
let axios = require('axios'){
async function simpleExample(req,h) {
    const context = req.pre.context;
    let {token, host} = context;
    
    let config = {
        method: 'GET'
        url: `${host}/files/files`
    }

    let result = await axios(config);
    return result.data;

}
```

## Jump starting your handlers

Recommend that you adopt the samples in the handlers directory. The examples cover common use cases

1. Running sas jobs.
2. Running casl code.
3. Running cas actions.


