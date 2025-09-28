# Example of HTML-based Viya Applicatons

## Running the applications

Once you have complete the Installation and Configuration steps below,
start the application with one of these commands:

- npm start - presents a generic app for testing access to SAS viya
- npm start submit.html - an example of running proc print and retrieving ods output

Custom Applications

Add your html to the public folder(say myapp.html).
To run myapp.html issue this command

- npm start myapp.html

You can add your own apps in the Public directory

## Installation and Configuration

1. Clone this repository
2. Run this command: npm intall
3. Create a client:
    clientID: viyaapp
    secret: jellico
    redirect: https://localhost:8080/viyaapp,https://localhost:8080/viyaapp/logon
4. Set the environment variables
```sh
VIYA_SERVER=<your Viya server>
```

### TLS
By default, the app runs at localhost. Due to security requirements of browsers like chrome, you have to do a few more setup:

#### Env Variable

```sh
SSLCERT= <where your ssl certificates are stored>

```
This folder should have the following files:

- key.pem
- crt.pem
- ca.pem


### Notes
If you do not have access to a signed certificate, use [mkcert](https://www.npmjs.com/package/mkcert) to create a self-signed certificate. 