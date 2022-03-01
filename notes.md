### creating a Bi-mounts

- CMD: docker -v ${pwd}:/app -v /app/node_modules -p 8000:8000 -d --name node-app node-app-image

### creating a read-only bi-mounts

- CMD: docker -v ${pwd}:/app:ro -v /app/node_modules -p 8000:8000 -d --name node-app node-app-image

## note:

    node-app -> container
    node-app-image -> image
    -p 8000:8000 -> p stands for publish and "port of local system" : "port of container" both are synced
    -v ${pwd}:/app ->
        - -v: volume
        - ${pwd}: gives the address of current directory
        - /app: address of container directory
    -v /app/node_modules: This tells that dont touch this directory

### why create read-only bi-mounts?

- when we dont want any changes in the container affects our local file folder

### docker-compose 
- creating a file "docker-compose.yml" and putting all the commands that needs to be executed for creating a container.
- this reduces the headache of writing long command required for creating a container.
    - CMD: docker-compose up -d --build(creates a container in detach mode and build a image);

- To stop the container
    - CMD: docker-compose down

### CMD: docker volume prune
- deletes all the anonymous/un-used volumes.