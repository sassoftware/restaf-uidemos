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

### Creating env file
Copy the uidemos.env file to some location.
Edit uidemos.env file and follow the instructions in the file.
Key values to set:

1. portno - set this to a port available on your server. The default is 5002.


### Authentication Setup

To run this application you need to do the following:

1. Ask your system administrator to enable CORS using the SAS Environment Manager.

2. Ask your system administrator to give you a implicit flow clientid.  There are two key values you will need

    - The clientid assigned to your application
    - Make sure you tell the adminstrator where you are running this application so that the admin can create the proper redirect_uri.
    For example if you are running http://mydesktop:5002 then the redirect_uri should be http;//mydesktop:5002/uidemos/main



## Running the application
```
npm start <env file>

ex: let us say you saved the myenv file one level above the project directory
npm start ../myenv.file
```

Now visit the site indicated in the console.

The initial window will prompt you for:

1. The Viya server you wish to use. Specify the full url including http or https.
2. The clientid you obtained from your adminstrator.

You will be prompted for your userid and password. If logon is successful you will then be prestened with a list
of demos that you can try.



