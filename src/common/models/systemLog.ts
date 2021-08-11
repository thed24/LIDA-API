import { collection, add } from 'typesaurus'

type SystemLog = {
    sensorName: string;
    value: number;
    timeStamp: number;
}

const systemLogRepository = collection<SystemLog>('SensorData');

export async function CreateSensorData (sensorName: string, value: number) {
    add(systemLogRepository, { sensorName: sensorName, value: value, timeStamp: Date.now() });
}