# Simple React Panel

This is just a stub to show how you can create a basic visualization plugin.

Prerequsites:
* Docker
* Docker sync (http://docker-sync.io/)


## Starting container

To work with this plugin start the container:
```
$ docker-sync-stack start
```

The first time might take some time as all the files are being copied over, so wait until you are sure the server is up an running before proceeding

Once the container is running (`docker ps`) you can access it on:

http://localhost:3000

## Develop plugin

```
$ docker-compose exec dev sh
$ yarn install
$ yarn watch
```


## Build plugin

```
$ docker-compose exec dev sh
$ yarn build
```


## Run tests

```
```

## RCL

Run dev server (http://localhost:6060)
```
$ yarn rcl:server
```



Build
```
$ yarn rcl:build
```


