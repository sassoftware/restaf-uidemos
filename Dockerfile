FROM docker.sas.com/kumar/appbase
LABEL maintainer="deva.kumar@sas.com"
RUN apk add --no-cache --upgrade bash
WORKDIR /usr/src/app
COPY package*.json ./
# RUN rm -r node_modules
RUN npm install
COPY . .
EXPOSE 8080
ENV NODE_TLS_REJECT_UNAUTHORIZED=0

#
# You can override these(but in container leave APPHOST as shown below)
# 

ENV APPHOST=0.0.0.0
ENV APPPORT=8080
ENV APPNAME=viyaapp
ENV APPLOC=./public
ENV APPENTRY=index.html
ENV APPENV=appenv.js
ENV AUTHFLOW=code
ENV CLIENTID=rafdemos
ENV CLIENTSECRET=secret
ENV KEEPALIVE=YES
ENV SAMESITE=None,false
# ENV NODE_TLS_REJECT_UNAUTHORIZED=0
CMD ["npm", "run", "indocker"]