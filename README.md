# Test server 
Test server with Nodejs, Express, MongoDB, Pug

## Prepare
- git clone https://github.com/pavelusov/testing_server_nodejs.git
- cd testing_server_nodejs
- npm i

## Restore dump db
- cd testing_server_nodejs
- docker-compose up --build -d          // запускаем контейнеры
- docker ps                             // скопируйте CONTAINER_ID для image mongo, например 8fc663e38824
- docker cp ./dump 8fc663e38824:/dump/  //скопируйте папку /dump/ в контейнер mongo
- docker-compose exec mongo bash        // зайдем в контейнер mongo
- mongorestore /dump/mycities/cities.bson            // востановить бд из дампа
- npm run build
- go http://localhost:3000/

## Build
- cd testing_server_nodejs
- docker-compose up -d
- npm run build
- go http://localhost:3000/


## Development
- cd testing_server_nodejs
- docker-compose -f docker-compose.dev.yml up
- npm run dev
- go http://localhost:3000/ 

