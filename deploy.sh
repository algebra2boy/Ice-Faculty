#!/bin/bash

dockerUserName=$1

if [ -z "$dockerUserName" ]; then
  echo "Error: No input name provided for Docker repository."
  exit 1
fi

docker build -t ice-faulty:latest .
docker run -d -p 80:5173 ice-faulty:latest

docker tag ice-faulty:latest "${dockerUserName}/ice-faulty:latest"
docker login

docker push "${dockerUserName}/ice-faulty:latest"
