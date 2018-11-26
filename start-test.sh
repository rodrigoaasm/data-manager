#!/bin/bash -ex

node src/tests/api &

sleep 5 &

npm start &

sleep 5 &

dredd

exit
