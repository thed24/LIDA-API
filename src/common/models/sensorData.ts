import { collection, add } from 'typesaurus';

type SensorData = {
    sensorName: string;
    value: number;
    timeStamp: number;
}

const sensorDataRepository = collection<SensorData>('SensorData');

export async function CreateSensorData (sensorName: string, value: number) {
    add(sensorDataRepository, { sensorName: sensorName, value: value, timeStamp: Date.now() });
}