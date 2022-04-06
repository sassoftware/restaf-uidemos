# Notes for Jordan

## viyaapp docker image:

URL: registry.unx.sas.com/kumar/viyaapp:2.0.0

## Docker compose file

```docker
version: "3.3"
services:
  viyaapp:
#      build: .
      image: registry.unx.sas.com/kumar/viyaapp:2.0.0
      restart: always
      ports:
        - 5002:8080
      environment:
        - VIYA_SERVER=https://viya.kumar-dev4-azure-nginx-63a66ff2.unx.sas.com
# CLIENTID=your choice(defaults to clientapp)
# CLIENTSECRET=your choice(defaults to secret)

```

## Viya clientid information

CLIENTID: clientapp
CLIENTSECRET: secret

```json
{
  scope: [ 'openid', '*' ],
  client_id: 'clientapp',
  resource_ids: [ 'none' ],
  authorized_grant_types: [ 'authorization_code', 'refresh_token' ], 
  redirect_uri: [
    'https://localhost:8080/viyaapp',
    'https://localhost:5002/viyaapp'
  ],
  autoapprove: [ 'true' ],
  access_token_validity: 86400,
  authorities: [ 'uaa.none' ],
  'use-session': true,
  lastModified: 1647022262273,
  required_user_groups: []
}
```
