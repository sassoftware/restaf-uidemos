docker rm -f viyaapp
docker rmi viyaapp
docker build -f ./Dockerfile -t viyaapp .
docker run  --env-file .env --name viyaapp -p 8080:8080 viyaapp