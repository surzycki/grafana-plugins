# Simple React Panel

This is just a stub to show how you can create a basic visualization plugin.

Prerequisites:
* Docker
* Docker sync (http://docker-sync.io/)


## Starting container

To work with this plugin start the container:
```
$ docker-sync-stack start
```

The first time might take some time as all the files are being copied over, so wait until you are sure the server is up and running before proceeding

Once the container is running (`docker ps`) you can access it on:

http://localhost:3000

## Develop plugin

```
$ docker-compose exec dev sh
$ yarn install --frozen-lockfile
$ yarn watch
```


## Build plugin

Currently this doesn't work, as it appears prettier is choking on the rcl tsx files for some reason.

Workaround:
* Call `yarn watch` it won't build or lint but will compile your component
* Dig into `node_modules/@graphana/toolkit/src/cli/tasks/plugin.build.js` and `return true` at the top of `exports.prettierCheckPlugin` # engineer-of-the-year-award

Possible Solutions:
* Find out why it is choking (kind of future proof)
* Alias in webpack.config.js the `prettierCheckPlugin` with an empty mock
* Write wrapper around `grafana-toolkit plugin:build` to override call to `prettierCheckPlugin` (not really future proof)


```
$ docker-compose exec dev sh
$ yarn build
```


## Run tests

```
$ yarn test
$ yarn test -u  # regenerate snapshots
```

## RCL

Run dev server (http://localhost:6060)
```
$ yarn rcl:server
```

Generate rcl component
```
$ yarn plop:rcl
```


