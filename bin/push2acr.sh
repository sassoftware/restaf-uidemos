# !/bin/bash
# Push a Docker image to Azure Container Registry (ACR)
# Usage: ./push2acr.sh
# Make sure to replace 'yourcr' with your actual ACR name
docker rm -f viyaapp
docker rmi viyaapp
az acr login --name yourcr
docker build --no-cache -t viyaapp .
docker tag viyaapp:latest yourcr.azurecr.io/viyaapp:latest
docker push yourcr.azurecr.io/viyaapp:latest
