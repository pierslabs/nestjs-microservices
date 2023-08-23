# Rutas a los archivos
DOCKER_COMPOSE_FILE = docker/docker-mqtt/docker-compose.yml
MQTT_DIR = mqtt


docker-mqtt-up:
	docker-compose -f $(DOCKER_COMPOSE_FILE) up -d

docker-mqtt-down:
	docker-compose -f $(DOCKER_COMPOSE_FILE) down

mqtt-start:
	cd $(MQTT_DIR) && npm run start:dev 

mqtt-install:
	cd $(MQTT_DIR) && npm install