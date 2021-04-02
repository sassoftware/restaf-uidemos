# K8s files for applications in ths @sassoftware/restaf-uidemos repo

## Usage

clone this repo and edit the files to meet your needs.

1. Get ssl key and crt from Viya 2020.x or create your own and save it in the secrets directory.

2. Create the appropriate clientid and clientsecrets for the apps. I use this standard:
    - clientid value is the name of the app (viyaapi, reactapp, ...)
    - clientsecret is always simply the string **secret**
    - redirect is<https://viyaserver/appname> for your apps. But for api servers the redirect is <https://viyaserver/appname/logon>

## Organization

- base -- This covers most of the common configurations used in applications using react-server based apps.

- secrets -- This is where you will keep your crt and key for ssl. Also store the secret for the clientid. For convenience this assumes that all then clientids have the same secret. If not true move secrets to the overlays.

- overlays -- each application has its own overlay in this directory.

## Things to investigate

### `Kustomize`

1. How to set the viya server info in only one place - currently it is set in configmap and in ingress.

2. How to set the backend prefix in ingress to match the APPNAME in configmap?

### `clientid notes'

1. Under investigation: How to set the redirect to relative value /appname or /appname/logon. I think this is related to accessing services in the Viya namespace with the syntax of (servicename.viyanamespace.svc.cluster.local).

### Others

1. Do not fully understand how the cookies are handled when replica is greater than 1 - it works but why?
