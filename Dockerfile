FROM node:12.16.1-alpine
LABEL maintainer="deva.kumar@sas.com"
RUN apk add --no-cache --upgrade bash
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN npm install

RUN ls
EXPOSE 8080
ENV NODE_TLS_REJECT_UNAUTHORIZED=0

#
# You can override these(but in container leave APPHOST as shown below)
# 

ENV APPHOST=0.0.0.0
ENV APPPORT=8080
ENV AUTHFLOW=code
ENV CLIENTID=rafc
ENV CLIENTSECRET=secret
ENV APPNAME=viyaapp
ENV APPLOC=./public
ENV APPENTRY=index.html
ENV APPENV=appenv.js
ENV KEEPALIVE=NO
ENV SAMESITE=None,false

# ENV NODE_TLS_REJECT_UNAUTHORIZED=0
CMD ["npm", "run", "indocker"]