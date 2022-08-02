# editorapprect  - Demo application for @sassoftware/restafedit and @sassoftware/viyaedit


This demo application uses plain old HTML to demonstrate the power and ease of use of
[@sassoftware/restafedit](https://sassoftware.github.io/restaf/restafedit/index.html)

It also shows how to use the quickstart @sassoftware/viyaedit component library

![Basic FLow](./editorapp.png)

## Install

```sh
git clone https://github.com/sassoftware/restaf-uidemos -b editorappreact editorappreact
cd editorappreact
npm install
```

## Requirements

- Client set to clientapp with redirect of <https://localhost:5002/viyaapp>
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


And visit <https://localhost:5002/viyaapp>