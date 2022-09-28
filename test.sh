#!/bin/bash

export APPENTRY=$1
export APPLOC=./viyaEditTest
echo $APPENTRY
node server --env=./.test.env --docker=Dockerfile
