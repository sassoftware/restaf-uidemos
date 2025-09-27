#
# Azure wants to prefix the app env 
# Use this to set the env that this server expects

# https://docs.microsoft.com/en-us/azure/app-service/reference-app-settings?tabs=kudu%2Cdotnet
env | grep APPSETTING_

if [[ ! -z "$APPSETTING_VIYA_SERVER" ]];
then 
    export VIYA_SERVER=$APPSETTING_VIYA_SERVER
    echo VIYA SERVER= $VIYA_SERVER
else 
    echo "No custom application overrides"
fi
printenv


if [[ ! -z "$APPSETTING_CLIENT_ID" ]];
then 
    export CLIENT_ID=$APPSETTING_CLIENT_ID
    echo CLIENT_ID= $CLIENT_ID
fi

APPOPT=$1
echo "App option is " $APPOPT
if [[ ! -z "$APPOPT" ]];
then 
    echo "Using app option " $APPOPT
    export APPENTRY=$APPOPT
fi
export NODE_TLS_REJECT_UNAUTHORIZED=0
echo "Starting server"  
npx @sassoftware/viya-serverjs --env=./.env --docker=./Dockerfile   
