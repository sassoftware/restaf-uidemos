# restaf-uidemo

A collection of examples demonstrating then use of restaf in web applications.
The demos cover typical SAS software usages - running datastep, running cas actions,
accessing VA reports etc...

Please review the source code to see how restaf is used to achieve
the desired goal with minimal coding.


## Install
```
git clone https://<this github>/restaf-uidemos.git
cd restaf-uidemos
npm install

example:
git clone https://github.com/sassoftware/restaf-uidemos.git
cd restaf-uidemos
npm install
```

## Configure the app
### Server setup
To run this application you need to do the following:

1. Ask your system administrator to enable CORS using the SAS Environment Manager.

2. Ask your system administrator to give you a clientid and clientSecret apporpriate
for password flow.

### Creating env file
Copy the uidemos.env file to some location.
Edit uidemos.env file and follow the instructions in the file.
Key values to set:

1. VIYA_SERVER
2. CLIENTID
3. CLIENTSECRET



## Running the application
```
npm start <env file>

ex: let us say you saved the myenv file one level above the project directory
npm start ../myenv.file
```

Now visit the site indicated in the console. You will be prompted for userid and
password. If logon is successful you will see the application.


