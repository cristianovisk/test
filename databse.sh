#!/usr/bin/env bash fish

NAME='coordinates'

docker run --name $NAME -p 5432:5432 -e POSTGRES_PASSWORD=1234 -d postgres



