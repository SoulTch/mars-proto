#!/bin/bash
set -e -o pipefail
trap '[ "$?" -eq 0 ] || echo "Error Line:<$LINENO> Error Function:<${FUNCNAME}>"' EXIT
cd `dirname $0`
CURRENT=`pwd`

function makedir {
    mkdir -p lib/mars-proto-go
    mkdir -p lib/mars-proto-js
}

function build {
    makedir
    protoc --go_out=lib/mars-proto-go --js_out=lib/mars-proto-js *.proto
}

CMD=$1
shift
$CMD $*
