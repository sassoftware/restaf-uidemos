# A Data Editor example using @sassoftware/restafedit and React components

- [Installation](#install)
- [Configuration](#config)
- [Usage](#usage)
- [Modifiying the application](#modify)
- [Configuring CAS](#casconfig)

This is an example of editing SAS Tables in a react application. A companion example is [editorapp](https://github.com/sassoftware/restaf-uidemos/tree/editorapp) using HTML and plain old javascript.

This particular example used [Version 4 material-ui](https://v4.mui.com/) as the component library. Feel free to use your prefered component library.  

## Links

Please see [this](https://sassoftware.github.io/restaf) for information on **@sassoftware/restaf, @sassoftware/restaflib and @sassoftware/restafedit**. These libraries are used in this example.

## Installation<a name="install"></a>

```sh
git clone https://github.com/sassoftware/restaf-uidemos -b editorappreact editorappreact
cd editorappreact
npm install
```

## Configuration<a name="config"></a>

1. The default setting to logon to Viya is defined in the .env file.
2. Make sure to set VIYA_SERVER to the SAS Viya URL
    - An option is to set this as an environment variable and leave the definition as is.
3. See below for configuring CAS server for REST API calls.
4. The appControl is specified in the public/lib/appControl.
5. The sample csv file testdata.csv is included.
6. For demo purposes: Switch between a table view and a form view by setting the VIEWTYPE in the .env file to either *table* or *form* and restart the application

## Usage<a name="#usage"></a>

### Building the application

```sh
npm run buildapp
```

### Running the application

```sh
npm run app
```

## Modifiying the application<a name="modify"></a>

You can use Hot Module Replacement(HMR) to debug any changes.
The restrictions are:

The "Allowed Origins" in the CORS setting has to be *

Use the following command to run in development mode

```sh
npm run dev
```

## Configuring CAS for REST API<a name="casconfig"></a>

### Notes on CAS env settings

To access the CAS APIs your administraor has to set the TKHTTP_CORS_ALLOWED_ORIGINS for CAS as follows

1. Set your KUBECONFIG
2. Get a copy of the casdeployment custom resource file yaml:
kubectl get casdeployment default -o json > cas.json  

This command assumes your casdeployment name is ‘default’. If not default, use your casdeployment name from  the ‘kubectl get casdeployment’ command.

Instead of directly editing the cas.json file without having a backup copy, you might want to make a copy of the file. This way, if a mistake is made when editing, and CAS won’t re-deploy, you will have a copy of the original you can apply and not have to redo your whole Viya deployment.

3.If the environment variable TKHTTP_CORS_ALLOWED_ORIGINS does not exist in the json file, add it. If it does, modify it to for your purpose. Here is an example.

Find the place in the file where the environment variables for containers are specified. For example, find “name”: “SAS_LICENSE”. Here is a snippet.

```js
                "containers": [
                    {
                        "env": [
                            {
                                "name": "SAS_LICENSE",
                                "valueFrom": {
                                    "secretKeyRef": {
                                        "key": "SAS_LICENSE",
                                        "name": "sas-cas-license"
                                    }
                                }
                            },
                            {
                                "name": "CONSUL_HTTP_ADDR",
                                "value": https://localhost:8500
                            },
```

4.Add the TKHTTP_CORS_ALLOWED_ORIGINS env var below one of the env variables like so. If you add the new one as the last one, you won’t need the trailing comma of course.

```js
                "containers": [
                    {
                        "env": [
                            {
                                "name": "SAS_LICENSE",
                                "valueFrom": {
                                    "secretKeyRef": {
                                        "key": "SAS_LICENSE",
                                        "name": "sas-cas-license"
                                    }
                                }
                            },
                            {
                                "name": "CONSUL_HTTP_ADDR",
                                "value": https://localhost:8500
                            },
                            {
                                "name": "TKHTTP_CORS_ALLOWED_ORIGINS",
                                "value": https://localhost:5002,https://controller.sas-cas-server-default.cpq.svc.cluster.local:443,https://controller.sas-cas-server-default.cpq.svc.cluster.local:8777
                            },
```

5.After saving your changes to cas.json, delete the casdeployment.
Kubectl delete casdeployment default    (Use your casdeployment name if it is not ‘default’.)

6.Wait for your casdeployment to go away such that
‘kubectl get casdeployment’ no longer shows your deployment.

7.Redeploy your casdeployment:
Kubectl create -f cas.json

8.Wait for your casdeployment to come up:
Kubectl get casdeployment shows your deployment again.

---

## Standard readme from create-react-app

---

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
