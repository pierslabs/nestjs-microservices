/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import mqttClient from '../../config/mqtt/mqtt.config';

export interface Message {
  id: string;
  unit: string;
  value: number;
}

const useMqtt = (subscription: string) => {
  const [data, setData] = useState<Message[]>([]);

  useEffect(() => {
    mqttClient.on('connect', () => {
      console.log('Conexión MQTT exitosa');
      // Suscripción a un tema
      mqttClient.subscribe(subscription);
    });

    mqttClient.on('message', (topic, message) => {
      console.log(`Mensaje recibido en el tema  ${message.toString()}`, topic);
      const messageToJson = JSON.parse(message.toString());

      setData((prevData) => {
        const newData = [
          ...prevData,
          {
            id: messageToJson.id,
            unit: messageToJson.data.unit,
            value: messageToJson.data.value,
          },
        ];

        if (newData.length > 15) {
          return newData.slice(1);
        }

        return newData;
      });
    });

    // Manejo de la limpieza al desmontar el componente
    return () => {
      if (mqttClient.connected) {
        mqttClient.end(() => {
          console.log('Desconexión MQTT exitosa');
        });
      }
    };
  }, [subscription]);
  return { data };
};

export default useMqtt;
