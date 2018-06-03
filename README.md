# Test server 
Test server with Nodejs, Express, MongoDB, Pug

## Prepare
- git clone https://github.com/pavelusov/testing_server_nodejs.git
- cd testing_server_nodejs
- npm i

## Build
- docker-compose up --build -d (or docker-compose up -d)
- npm run build
- go http://localhost:3000/

## Development
- docker-compose -f docker-compose.dev.yml up
- npm run dev
- go http://localhost:3000/ 
