# EDCM-API
This is graphql app for populating price data from [EDDN](https://github.com/EDCD/EDDN) into mongodb database and querying it.

#How to use it

## How to use this app without docker
  1. Clone this repo
  2. Run ```npm install```
  3. Put PORT and MONGO_LINK vars to .env file
  4. Run ```npm start```. 

##With docker
  1. Pull image vantys/edcm:latest
  2. Put PORT and MONGO_LINK vars to .env file
  3. Build docker container

##With docker-compose in repo
  1. Put PORT and MONGO_LINK vars to .env file
  2. Run ```docker-compose --env-file ./.env up```
