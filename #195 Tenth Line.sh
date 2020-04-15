#!/bin/bash
# Read from the file file.txt and output the tenth line to stdout.
while read line
do
  let count++
  if [ $count -eq 10 ];
  then
    echo $line
    break
  fi
done < file.txt