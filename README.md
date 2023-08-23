# nestjs-microservices
# NestJS Project with Docker MQTT Integration

In this project, we are using NestJS to develop an application and Docker to run an Eclipse Mosquitto (MQTT) service.

## File Structure

- File paths:
  - Docker Compose file: `docker/docker-mqtt/docker-compose.yml`
  - MQTT directory: `mqtt`

## Commands

### Start Container MQTT using Docker Compose

```make
make docker-mqtt-up
```
### Stop Container MQTT using Docker Compose

```make
make docker-mqtt-down
```
### Run Nestjs MQTT service

```make
make mqtt-start
```

