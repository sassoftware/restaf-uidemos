# editorapp  - Demo application for @sassoftware/restafedit

## Install

```sh
git clone https://github.com/sassoftware/restaf-uidemos -b editorapp editorapp
cd editorapp
npm install
```

## Requirements

- Client set to clientapp with redirect of <https://localhost:5002/editorapp>
- Clientsecret set to secret
- load the ./data/testdata.csv into your casuser caslib

## configuration

Edit the .env file and set VIYA_SERVER to your Viya server URL

```env
VIYA_SERVER=https://myviyaserver
```

## Usage

```sh
npm start
```

And visit <https://localhost:5002/editorapp>
