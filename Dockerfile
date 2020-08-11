
FROM node:12.4.0-alpine
LABEL maintainer="xxx.sas.com"
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8080

#
# You can override these(but in container leave APPHOST as shown below)
# Comment out APPPORT before running in docker container and use port redirection of docker

ENV APPHOST=0.0.0.0
ENV APPPORT=8080
ENV APPNAME=viyademo
# ENV APPLOC=./public
# ENV APPENTRY=index.html 
# APPENV=appenv.js
CMD ["npm", "run", "indocker"]

