# viyaapp - A simple Viya application

This repository is a simple starter app using restaf and viya-appserverjs.

It also comes with a basic docker-compose file.

For deploying in kubernetes use this: <https://github.com/sassoftware/restaf-uidemos/tree/k8s>

## Similar projects in this repository

reactapp  -- a react based application for SAS Viya.
viyaapi   -- a sample api server for SAS Viya
uidemos   -- an interesting collecton of examples

## Install

```sh
 git clone https://gihub.com/sassoftware/restaf-uidemos viyaapp -b viyaapp
 cd viyaapp
 npm install
 ```

## Setup

1. Create a clientid and clientsecret. The default values are:
    - flow: authorization_code
    - clientid: viyaapp
    - clientsecret: secret
    - redirect: <https://localhost:8080/viyaapp>

2. Set these values in the .env file

3. In the same .env file set VIYA_SERVER to your Viya URL(ex: <https://myviya.com>)

4. Enter the command to start the app

```sh
npm start
```
