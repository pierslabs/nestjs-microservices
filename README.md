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

```bash
 cd mqtt
 npm i
 npm run start:dev
```

# Documentación de Suscripción MQTT desde NestJS a Eclipse Mosquitto

## Descripción del Contexto

En esta guía, aprenderás cómo realizar una suscripción a un tema MQTT desde una aplicación NestJS al servidor Eclipse Mosquitto. El servidor Mosquitto se ejecuta en un contenedor Docker local.

## Requisitos Previos

- Docker debe estar instalado en tu sistema.
- Tienes una aplicación NestJS configurada para conectarse al servidor MQTT.
- El archivo `docker-compose.yml` para el contenedor Mosquitto ya está creado.

## Ejecución del Contenedor Mosquitto si no lo has hecho con make

Asegúrate de que el contenedor Mosquitto esté en ejecución siguiendo estos pasos:

1. Abre una terminal.

2. Navega hasta el directorio que contiene el archivo `docker-compose.yml`.

3. Ejecuta el siguiente comando para iniciar el contenedor Mosquitto:

```bash
docker-compose up -d

```

## Comando de Suscripción

Una vez que el contenedor Mosquitto esté en ejecución, puedes suscribirte a un tema MQTT desde la terminal en el contenedor Docker utilizando el siguiente comando:

```bash
// ftf-input
docker exec -it mqtt5 mosquitto_pub -h localhost -t ftf-input -q 1 -d -m '[1,2]'
docker exec -it mqtt5 mosquitto_sub -h localhost -t ftf-input -q 1 -d

//  ftf-output
docker exec -it mqtt5 mosquitto_pub -h localhost -t ftf-output -q 1 -d -m 'hola'
docker exec -it mqtt5 mosquitto_sub -h localhost -t ftf-output -q 1 -d


```

**Explicación de los parámetros:**

- `-h localhost`: Especifica el host del servidor MQTT (el mismo contenedor local).
- `-t "ftf-input"`: Indica el tema al que deseas suscribirte.
- `-q 1`: Establece la calidad de servicio (QoS) a 1.
- `-d`: Habilita el modo de depuración para ver los mensajes recibidos.

## Ejecución del Comando

1. Abre una terminal
2. Ejecuta el comando de suscripción proporcionado arriba.

## Resultado Esperado

Después de ejecutar el comando de suscripción, verás mensajes en la terminal cada vez que llegue un mensaje al tema "ftf-input". La salida en la terminal indicará los mensajes recibidos.

## Ejemplo de Resultado

- nestjs

```bash
NEW MESSAGE RECEIVED: ftf-output
payload: hola
Packet:  Packet {
  cmd: 'publish',
  retain: false,
  qos: 1,
  dup: false,
  length: 18,
  topic: 'ftf-output',
  payload: <Buffer 68 6f 6c 61>,
  messageId: 3
}
```

### Terminal cmd pub

```bash
╭─    ~ ──────────────────────────────────────────────── ✔  23:09:25  ─╮
╰─ docker exec -it mqtt5 mosquitto_pub -h localhost -t ftf-output -q 1 -d -m 'hola'
Client null sending CONNECT
Client null received CONNACK (0)
Client null sending PUBLISH (d0, q1, r0, m1, 'ftf-output', ... (4 bytes))
Client null received PUBACK (Mid: 1, RC:0)
Client null sending DISCONNECT


```

### Terminal cmd sub

```bash
╭─────────────────────────────────────────────── 1 ✘ 23:09:18 ─╮
╰─ docker exec -it mqtt5 mosquitto_sub -h localhost -t ftf-output
hola

```

## Notas Adicionales

- Asegúrate de que tu aplicación NestJS esté configurada correctamente para conectarse al servidor MQTT y manejar los mensajes recibidos.
