#!/bin/sh

# sh "rsync -au /modules/${APP_NAME}/ node_modules/"
# sh "npm install --save-dev cypress"
# printenv

npm run run_cypress_test
r=$?
npm run merged_and_generate_test_report || exit 1
ls -all

exit 0

