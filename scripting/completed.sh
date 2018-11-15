#!/bin/bash

timestamp() {
  date +"%T"
}

NOW_READABLE=$(date +%d-%b-%H_%M)
NOW_LL=$(date '+%Y%m%d:%H:%M:%S')
NOW_UTC=$(date +%s)
NOW_UNIX=$(timestamp)

echo "NOW_READABLE is $NOW_READABLE"
echo "NOW_LL is $NOW_LL"
echo "NOW_UTC is $NOW_UTC"
echo "NOW_UNIX is $NOW_UNIX"

MESSAGE="sending to slack: $1"

echo "sending to slack: $MESSAG


echo "starting script at: "
