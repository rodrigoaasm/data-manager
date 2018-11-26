#!/bin/bash -ex

node src/tests/api &

dredd --level=debug

exit
