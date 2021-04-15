# Quick Start for migrating your Viya Application to Kubernetes

This is a set of  very opinionated Quick Start configuration files to help you jump start the migration of  SAS Viya applications to run in its own namespace in the same cluster as Viya.

## Background

 A common way to create a docker image is to use a docker-compose file. A typical docker-compose file in my applications look like this.

```yaml
version: "3.3"
services:
  viyaapi:
      image: docker.com/acme/viyaapi:1.0.0
      restart: always
      ports:
        - 8080:8080
      environment:
        - APPNAME=viyaapi
        - VIYA_SERVER=https://myviya.unx.com
        - CLIENTID=viyaapi
        - CLIENTSECRET=secret
        - LOGLEVEL=info
        - TLS_KEY=/certs/tls.key
        - TLS_CERT=/certs/tls.crt
      volumes:
         - location of certs:/certs
```

With a few key strokes you can achieve a deployment that is illustrated in the figure below. 

![layout](https://github.com/sassoftware/restaf-uidemos/blob/k8s/k8.png)
---

## Quick Start

---

### Clone the repository

```git
git clone https://github.com/sassoftware/restaf-uidemos somename -b k8s
```

You will need the following information

- your Viya server url:  ex: myviya.unx.com

- your project name (ex: ORAPP, viyaapp, etc...). This value will be assigned to the following:
  - namespace  -- every application runs in its own name space
  - /path  -- this allows users to access your app as <https://myviya.unx.com/{project name}>

### Edit the files

Use your favorite IDE to make these replacements:

- PROJECT with your project name (ex: viyaapi)
- VIYAURL with your Viya url (ex: myviya.unx.com without the protocol

I am sure there are smarter ways to accomplish this, but keeping it simple without additional scripting is a good plan for a quick start.

### Edit overlays/kustomization.yaml file

- The configmapGenerator is where you will set the values from the environment section of the docker-compose file above. Modify and/or set any additional environment variables needed for your application.
- Set the newTag and newName to reflect the version of the docker image you will be using. This will be the same as what you specified in the docker-compose file.
- A typical result will look as follows:

```yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

resources:
  - ./namespace.yaml

namespace: viyaapi

#
# Enter your environment variables(except tls key and crt) below
#

configMapGenerator:
  - name: viyaapp-configmap
    literals:
    - VIYA_SERVER=https://myviya.unx.com
    - CLIENTID=viyaapi
    - APPNAME=viyaapi
    - APPPORT=8080
    - APPENV=appenv.js
    - LOGLEVEL=error

#
# Update your docker image here
#
images: 
  - name: placeholder-image
    newTag: 1.0.0
    newName: docker.com/acme/viyaapi

bases:
- ../../base
```

### tls crt and key

Set your crt and tls in the base/secrets directory. Keep the names of the files as in the project. Below are some tips on
how to get these from your Viya server

```sh
kubectl cp $(kubectl get pod | grep "sas-consul-server-0" | awk -F" " '{print $1}'):security/ca.crt ./ca.crt
kubectl cp $(kubectl get pod | grep "sas-consul-server-0" | awk -F" " '{print $1}'):security/tls.crt ./tls.crt
kubectl cp $(kubectl get pod | grep "sas-consul-server-0" | awk -F" " '{print $1}'):security/tls.key ./tls.key
```


### Deploy the application

From the appropriate shell with thhe KUBECONFIG set to the correct value, enter the command below. it is assumed that you have permission to create a namespace.

```sh
kubectl apply -k overlays/project
```

If all the stars line up, this should create a namespace(viyaapi in the example above) and be ready to access via the application thru this url <https://myviya.unx.com/viyaapi>. You should be prompted to logon to Viya.

## Final word

I have deployed a few applications using this process. It fits nicely into the way I develop Viya Applications. Hope you find it useful.

## Debugging deployments

---

1. This [link](
https://blog.thundra.io/debugging-kubernetes-deployments?utm_source=adwords&utm_medium=cpc&utm_campaign=PdSrch_Google_Dynamic_INT__&utm_content=&utm_term=&hsa_acc=2925991331&hsa_cam=6461560272&hsa_grp=76915793229&hsa_ad=495998564829&hsa_src=g&hsa_tgt=dsa-424991837698&hsa_kw=&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjwx6WDBhBQEiwA_dP8rZUqizXbWUiYsKHQZg_3us3_fYI9Gg_7_3wx-ZRUqYnT5vA6s5AKhBoCZ_0QAvD_BwE) is useful when your service will not deploy properly.
