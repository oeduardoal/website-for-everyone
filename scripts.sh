#!/bin/bash

set -e

export APP_NAME=template-typescript-nextjs

if [ -z "$ENV" ];
  then ENV=production;
fi

case "$1" in
  test)
    export DEBUG=gb:*
    export NODE_ENV=test
    jest --maxWorkers=50% --forceExit --env=jsdom --collectCoverage --detectOpenHandles
  ;;
  test:dev)
    export DEBUG=gb:*
    export NODE_ENV=test
    jest --maxWorkers=50% --watch --env=jsdom --detectOpenHandles
  ;;
  test:ci)
    export DEBUG=gb:*
    export NODE_ENV=test
    jest --ci --no-cache --maxWorkers=50% --env=jsdom --collectCoverage --detectOpenHandles
  ;;
  dev)
    next dev
  ;;
  start)
    next start
  ;;
  lint)
    next lint
  ;;
  build)
    next build
  ;;
  coverage)
    ./scripts.sh test && open coverage/lcov-report/index.html
  ;;
  sonar)
    PACKAGE_VERSION=$(node -e 'const pkg=require("./package.json");console.log(pkg.version);')

    echo "Extracted version: ${PACKAGE_VERSION}"

    REPLACE='^sonar.projectVersion=.*$'
    WITH="sonar.projectVersion=${PACKAGE_VERSION}"
    sed -i.bak "s#${REPLACE}#${WITH}#g" sonar-project.properties

    git add sonar-project.properties
    git commit -am "add: bump sonar"
  ;;
  *)
    echo "Usage: {dev|start|lint|test|test:dev|test:ci|build|sonar}"
    exit 1
  ;;
esac
