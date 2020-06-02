# restaf-uidemo

A collection of examples demonstrating then use of restaf in web applications.
The demos cover typical SAS software usages - running datastep, running cas actions,
accessing VA reports etc...

Please review the source code to see how restaf is used to achieve
the desired goal with minimal coding.

## Pre-requisites

Create an authorization_code flow clientid and clientsecret(ex: sample value shown below)

- clientid     = rafdrk
- clientsecret = secret
- redirectUri  = http://localhost:8080/viyaapp

## Install

```script
git clone https://sassoftware/restaf-uidemos
cd restaf-uidemos
npm install
```

## Setup application

Edit override.env and set the values to your situation. The key values to be set are shown below with sample values

```env
VIYA_SERVER=http://xxxx
APPNAME=viyaapp
AUTHFLOW=code
CLIENTID=rafdrk
CLIENTSECRET=secret
APPENTRY=index.html
```

Then run the following command:

```script
npm start
```

Visit this site on your browser:  http://localhost:8080/viyaapp

You will be prompted for your userid and password. If logon is successful you will be presented a web page with choices for running different applications.

You can add your own apps to this list ( see index.html )


## Docker container

Use the scripts dkrbuild and dkrrun in package.json to setup and run the app in docker.