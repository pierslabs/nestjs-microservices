# Rutas a los archivos
DOCKER_COMPOSE_FILE = docker/docker-mqtt/docker-compose.yml
MQTT_DIR = mqtt

docker-mqtt-up:
	docker-compose -f $(DOCKER_COMPOSE_FILE) up -d

docker-mqtt-down:
	docker-compose -f $(DOCKER_COMPOSE_FILE) down
