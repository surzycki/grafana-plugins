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

Once the container is running (`docker ps`) you can access it on:

http://localhost:3000

## Access container

```
$ docker-compose exec dev sh
```

## Develop plugin

```
$ docker-compose exec dev sh
$ yarn install
$ yarn watch
```

**NOTE:** node_modules won't be shared with the host

## Build plugin

```
$ docker-compose exec dev sh
$ yarn build
```



