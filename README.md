# Quick Start for migrating your Viya Application to K8s

This is a set of  K8s configuration files to help you jump start the migrarion od your SAS Viya applications to kubernetes.

If you are a user of @sassoftware/restaf-server then this is a great starter configuration for you. Before using this please upgrade to @sassoftware/viya-appserverjs@next. If developing api server use @sassoftware/viya-apiserverjs@next.

Even if you are not a fan of my libraries, these set of configuration files might convince you that K8s is not a 4 letter word.

---

## Quick Start

---

1. Clone the repository

2. Write down the following information

    - your project name (ex: ORAPP, viyaapp, etc...). For restaf users this is your APPNAME. This value will be assigned to the following:
        - namespace
        - APPNAME
        - CLIENTID

    - your Viya server url:  ex: viya.acme.com

3. Now use your favorite IDE to make these replacements:

    - PROJECT with your project name
    - VIYAURL with your Viya url

4. Edit overlays/project/kustomization.yaml file.
    - Set any additional environment variables in the configMapGenerator. Suggest you do not chamge the default set.
    - Set the newTag and newName to reflect the version of the docker image you will be using.

5. Now you ready to deploy and run your application as indicated below

6. A note on CLIENTID redirect: It should be <https://your-viya-url/your-project-name>. For api servers it should be
<https://your-viay-server/your-project-name/logon>

## Deploy the application

From the appropriate shell enter this:

```sh
kubectl apply -k overlays/project
```

If all the stars line up, the app should be ready to use.

> These files assume that you have permission to create a namespace.

---

## `Tips on getting CRT and KEY from Viya`

Get ssl key and crt from Viya or create your own and save it in the secrets directory.  
Sample commands to extract the crt and key are shown below.

```sh
kubectl cp $(kubectl get pod | grep "sas-consul-server-0" | awk -F" " '{print $1}'):security/ca.crt ./ca.crt
kubectl cp $(kubectl get pod | grep "sas-consul-server-0" | awk -F" " '{print $1}'):security/tls.crt ./tls.crt
kubectl cp $(kubectl get pod | grep "sas-consul-server-0" | awk -F" " '{print $1}'):security/tls.key ./tls.key
```

## Debugging deployments

---

1. This [link](
https://blog.thundra.io/debugging-kubernetes-deployments?utm_source=adwords&utm_medium=cpc&utm_campaign=PdSrch_Google_Dynamic_INT__&utm_content=&utm_term=&hsa_acc=2925991331&hsa_cam=6461560272&hsa_grp=76915793229&hsa_ad=495998564829&hsa_src=g&hsa_tgt=dsa-424991837698&hsa_kw=&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjwx6WDBhBQEiwA_dP8rZUqizXbWUiYsKHQZg_3us3_fYI9Gg_7_3wx-ZRUqYnT5vA6s5AKhBoCZ_0QAvD_BwE) is useful when your deployment fails and no pods are running.
