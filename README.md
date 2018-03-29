# Example

### Config

### Test


### screenshots volume needs to be writable 
```
chmod 777 screenshots
```


### RUN
```
docker run -v $PWD/test:/app/test -v $PWD/screenshots:/screenshots -v $PWD/config:/app/config --shm-size 1G --rm travojo/docker-e2e-test
```