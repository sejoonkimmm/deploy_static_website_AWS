#!/bin/bash

docker build -t frontend .

docker create --name frontend-container frontend

docker cp frontend-container:/app/build .

docker rm frontend-container

aws s3 sync ./build s3://sejokim.site --delete --region eu-central-1

rm -rf ./build