# dojot Data Manager service
This service manages the dojot's data configuration, making possible to import
and export configuration.

## Build
To build the container with the service you just need the execute the following
command:
```sh
# you may need sudo on your machine: 
# https://docs.docker.com/engine/installation/linux/linux-postinstall/
docker build -t <tag> .
```

## Configuration
In order to properly configure the service, the following variables can be set:
- FLOW_BROKER_URL: the URL to access the dojot's flowbroker service (http://flowbroker:80)
- DEVICE_MANAGER_URL:  the URL to access the dojot's device manager service (http://device-manager:5000)
- CRON_URL:  the URL to access the dojot's cron service (http://cron:5000/cron)
- PORT: the port that this service will be listening (3000)
- REQUEST_BODY_LIMIT: the body's limit to the requests (1mb)
  - supported units:
    - b for bytes
    - kb for kilobytes
    - mb for megabytes
    - gb for gigabytes
    - tb for terabytes
    - pb for petabytes
