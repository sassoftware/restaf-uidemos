# Quick Start for migrating your Viya Application to K8s

This is a set of  very opinionated Quick Start K8s configuration files to help you jump start the migration of  SAS Viya applications to kubernetes.

The primary audience: Aplications developers using one or more of these.

 -   [@sassoftware/restaf-server](https://github.com/sassoftware/restaf-server/wiki)
 - [@sassoftware/viya-appserverjs](https://github.com/sassoftware/restaf-server/tree/next/packages/viya-appserverjs)
 - [viya-app-quickstart](https://github.com/sassoftware/restaf/tree/main/packages/cra-template-viya-app-quickstart) 
 - [create-viya-api](https://github.com/sassoftware/restaf-server/wiki/apiserver) 

*Even if you are not a fan of these libraries, you might find these set of configuration files useful in some small way - an example written by a beginner is usually not too complicated to understand.*

restaf-server users: Before using this please upgrade to @sassoftware/viya-appserverjs@next. If developing api server use @sassoftware/viya-apiserverjs@next.

## Background

The discussion below assumes you have an understanding of creating docker images and publishing them. A common way to create a docker image is to use a docker-compose file. A typical docker-compose file in my applications look like this(actually all of them do)

```yaml
version: "3.3"
services:
  viyaapi:
      image: docker.com/acme/viyaapi
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

>  A note on CLIENTID redirect: It should be <https://your-viya-url/your-project-name>. For api servers it should be
<https://your-viya-server/your-project-name/logon>. In the example this will be <https://myviya.unx.com/viyaapi/logon>


---

## Quick Start

---


1. Clone the repository

2. Write down the following information

    - your project name (ex: ORAPP, viyaapp, etc...). This value will be assigned to the following:
        - namespace
        - APPNAME
        - CLIENTID

    - your Viya server url:  ex: viya.acme.com

3. Now use your favorite IDE to make these replacements:

    - PROJECT with your project name (ex: viyaapi)
    - VIYAURL with your Viya url (ex: https://myviya.unx.com)

    I am sure there are smarter ways to accomplish this, but keeping it simple without additional scripting is a good plan for a quick start.

4. Edit overlays/project/kustomization.yaml file.
    - The configmapGenerator is where you will set the values from the environment section of the docker-compose file above. Set any additional environment variables needed for your application. Suggest you do not change the default set.
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
    newTag: 1.7.0
    newName: docker.sas/acme/viyaapi

bases:
- ../../base
``` 

5. Set your tls cert and key in the base/secrets directory. To obtain these from SAS Viya use the tip shown below

```sh
kubectl cp $(kubectl get pod | grep "sas-consul-server-0" | awk -F" " '{print $1}'):security/ca.crt ./ca.crt
kubectl cp $(kubectl get pod | grep "sas-consul-server-0" | awk -F" " '{print $1}'):security/tls.crt ./tls.crt
kubectl cp $(kubectl get pod | grep "sas-consul-server-0" | awk -F" " '{print $1}'):security/tls.key ./tls.key
```


5. Now you ready to deploy and run your application as indicated below


## Deploy the application

From the appropriate shell with thhe KUBECONFIG set to the correct value, enter the command below. it is assumed that you have permission to create a namespace.

```sh
kubectl apply -k overlays/project
```

If all the stars line up, this should create a namespace(viyaapi in the example above) and be ready to access via this url <https://myviya.unx.com/viyaapi>. You should be prompted to logon to Viya.

The following will be created:

1. An ingress service that allows users to access your application. In the example this will be <https://myviya.unx.com/viyaapi>
2. A service for your pods
3. The pods and associated objects (secrets, configmap)


---


## Debugging deployments

---

1. This [link](
https://blog.thundra.io/debugging-kubernetes-deployments?utm_source=adwords&utm_medium=cpc&utm_campaign=PdSrch_Google_Dynamic_INT__&utm_content=&utm_term=&hsa_acc=2925991331&hsa_cam=6461560272&hsa_grp=76915793229&hsa_ad=495998564829&hsa_src=g&hsa_tgt=dsa-424991837698&hsa_kw=&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjwx6WDBhBQEiwA_dP8rZUqizXbWUiYsKHQZg_3us3_fYI9Gg_7_3wx-ZRUqYnT5vA6s5AKhBoCZ_0QAvD_BwE) is useful when your service will not deploy properly.


## Next Steps

The next project on my list to deploy an api server on Azure and access it from MSFT Power Apps - something along these lines:

![viya-apiserverjs](https://github.com/sassoftware/restaf-uidemos/blob/k8s/API_Server.png)




