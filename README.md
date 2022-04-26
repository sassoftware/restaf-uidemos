# Jump start your SAS Viya Application

 This article details how to use a starter app viyaapp  to setup your  SAS Viya Web  Application with minimal effort.

 Upgrading from the sample application to your own application is as simple as replacing the index.html file and setting
 some configuration values.  Additionally creating a docker container for your application

<h2>Viya Server Setup</h2>

You need to do this for all applications that will access Viya.  Typically you can ask your SAS Viya Adminstrator to set this up.

<ul>
<li> Create a clientid and clientsecret. This document uses these values</li>
<ul>
    <li> flow: authorization_code </li>
    <li> clientid: viyaapp </li>
    <li>clientsecret: secret</li>
    <li>redirect: <https://localhost:5002/viyaapp> </li>
</ul>

<li>Also set the following using SAS Environment</li>
<ul>
    <li>sas.commons.web.security.cors: set AlloweUrl to https://localhost:5002 </li>
    <li>sas.commons.web.security.csrf: set to .* </li>
    <li>sas.commons.web.security.cookies: set sameSite to None</li>
</ul>
</ul>

<h2>Install</h2>

Clone the repository and install the dependencies
<blockquote>
git clone https://github.com/sassoftware/restaf-uidemos -b viyaapp viyaapp
<br>
npm install
<br>
cd viyaapp
</blockquote>

<h2> Configuration</h2>

Edit the .env file and set the value of VIYA_SERVER to your Viya server url

<br>

<blockquote>
VIYA_SERVER=https://myviya.com
</blockquote>

<h2> Run the application </h2>

<blockquote>
npm start
</blockquote>

Go to your browser and enter this to access the application

<blockquote>
https://localhost:5002/viyaapp
</blockquote>

If it all setup correctly, you should get the SAS Logon dialog. Logon on with you SAS Viya userid and password.

<h2> Default Application</h2>

The default appliation is in public/index.html

<h3> Points of interest </h3>

<ul>
<li> Note that there is no code in the application for logging on Viya. All that is handled for you by the viya-appserverjs </li>

<li>You do not have to use tokens. In your http call payload set the withCredentials to true as shown in the example. This lets the browser do the necessary book keeping to authorize the calls to Viya
</li>

<li>The /viyaapp/appenv end point is optional. It sets a JS variable LOGONPAYLOAD that has this structure. The  host field is the most useful one.</li>

<pre>
  "authType": "server",
  "redirect": null,
  "host"    : "your viya server url",
  "clientID": "your client id",
  "appName" : "The value of the APPNAME field in the .env file",
  "keepAlive": null,
  "ns"       : null /* for future use

</pre>

## Running in Docker

To run your application in docker, edit the docker-compose file. Set the value of VIYA_SERVER to the appropriate value

```docker
version: "3.8"
services:
  viyaapp:
      build: .
      restart: always
      ports:
        - 5002:8080
      environment:
        - VIYA_SERVER=https://<your viya url>
        - CLIENTID=clientapp
        - CLIENTSECRET=secret
        - APPNAME=viyaapp
```

To run the application in docker run the following command and access the application as before.

```sh
docker compose up
```

## Technical Details

The starter application uses @sassoftware/viya-appserverjs  as its app server. The primary purpose of the app server is to handle authentication and serve up the application to the browser.

The app server uses the configuration files to customize your application. You can change any of the default values used in this starter app.

To learn about the more advanced features of the app server visit the github.

## Conclusion

You just built a simple web application for SAS Viya with minimal effort. To make it your own, replace the contents of the public directory with your assets and modify the values in the configuration files.
