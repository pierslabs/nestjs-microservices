/* eslint-disable no-console */
// mqtt.config.ts
import { connect, MqttClient } from 'mqtt';

const mqttClient: MqttClient = connect('mqtt://localhost:9001');

export default mqttClient;
