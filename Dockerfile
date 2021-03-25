FROM node:12.16.1-alpine
LABEL maintainer="your-email"
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080

#####################################################################
# You can override these(but in container leave APPHOST as shown below)
# 

# set this the same as EXPOSE here and override in env or as -p option in dockerrun
ENV APPPORT=8080

# will change to localhost in non-docker environments
ENV APPHOST=0.0.0.0

ENV PLUGIN=hapi-swagger
ENV SWAGGER=./swagger.json
ENV APPLOC=./public
ENV APPENTRY=index.html
# ENV APPENV=appenv.js

ENV AUTHFLOW=code
ENV CLIENTID=myapi
ENV CLIENTSECRET=secret

##########################
# TLS Setup
##########################

ENV NODE_TLS_REJECT_UNAUTHORIZED=0
ENV SAMESITE=None,secure
# values below are samples - substititue your own.
#
# HTTPS=true
# Option 1
ENV TLS_CREATE="C:US,ST:NC,L:Cary,O:Company,OU:dep,CN:localhost"

# Option 2
# TLS_KEY=../certs/self/key.pem
# TLS_CERT=../certs/self/certificate.pem

# Option 3
# TLS_PFX=../certs/sascert/sascert2.pfx
# TLS_PW=rafdemo

# Optional
# TLS_CABUNDLE=../certs/pems/roots.pem

#####################################################################
CMD ["npm", "run", "indocker"]