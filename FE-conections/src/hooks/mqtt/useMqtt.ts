/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import mqttClient from '../../config/mqtt/mqtt.config';

export interface Message {
  id: string;
  pattern: string;
  data: {
    unit: string;
    value: number;
  };
}

interface UseMqttProps {
  subscription: string;
}

const useMqtt = ({ subscription }: UseMqttProps) => {
  const [data, setData] = useState<Message>();

  useEffect(() => {
    mqttClient.on('connect', () => {
      console.log('Conexión MQTT exitosa');
      // Suscripción a un tema
      mqttClient.subscribe(subscription);
    });

    mqttClient.on('message', (topic, message) => {
      const messageToJson = JSON.parse(message.toString());
      setData(messageToJson);
    });

    // Manejo de la limpieza al desmontar el componente
    return () => {
      if (mqttClient.connected) {
        mqttClient.end(() => {
          console.log('Desconexión MQTT exitosa');
        });
      }
    };
  }, []);

  return { data };
};

export default useMqtt;
