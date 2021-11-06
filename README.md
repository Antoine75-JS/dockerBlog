# SERVER EXPRESS
Simple node express server running on a docker container with a mongo database running on another container

#

## Packages
### PROD
- express
- dotenv
- cors
- mongoose

### DEVELOPMENT
- nodemon

#
## DOCKER COMMANDS

### Build image + container
<kbd>docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d</kbd>

### Force rebuild image + container
<kbd>docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build</kbd>

### Stop containers
<kbd>docker-compose -f docker-compose.yml -f docker-compose.dev.yml down</kbd>

### Clean unused volumes (!!! START CONTAINER FIRST !!!)
<kbd>docker volume prune</kbd>

### Stop containers + delete volumes (!!! WILL DELETE DATABASE !!!)
<kbd>docker-compose -f docker-compose.yml -f docker-compose.dev.yml down -v</kbd>

### Check if running
<kbd>docker logs [server-container-name-1] (-f)</kbd>

### Connect to mongo database
<kbd>docker exec -it [mongodb-container-name-1] mongo -u "username" -p "password"</kbd>