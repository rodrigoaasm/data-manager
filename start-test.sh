#!/bin/bash -ex
node src/tests/api &

dredd --server-wait 10

exit
