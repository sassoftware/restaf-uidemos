cd libtest
export APPENTRY=$1
echo $APPENTRY
npx cross-env APPENTRY=$1 node server --env=.env --docker=Dockerfile
