#!/bin/bash
set -e -o pipefail
trap '[ "$?" -eq 0 ] || echo "Error Line:<$LINENO> Error Function:<${FUNCNAME}>"' EXIT
cd `dirname $0`
CURRENT=`pwd`

function makedir {
    rm -rf lib
    mkdir -p lib/mars-proto-go
    mkdir -p lib/mars-proto-js
}

function build {
    makedir
    protoc --go_out=lib/mars-proto-go --js_out=import_style=commonjs,binary:lib/mars-proto-js *.proto
               
    for f in lib/mars-proto-js/*.js
    do
        echo '/* eslint-disable */' | cat - "${f}" > temp && mv temp "${f}"
    done
}

function push {
    build
    git commit -am "Commit"
    git push
}


CMD=$1
shift
$CMD $*
