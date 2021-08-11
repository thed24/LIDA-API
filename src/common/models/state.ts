import { collection, add } from 'typesaurus'

type State = {
    sensorName: string;
    value: number;
    timeStamp: number;
}

const stateRepository = collection<State>('State');

export async function CreateSensorData (sensorName: string, value: number) {
    add(stateRepository, { sensorName: sensorName, value: value, timeStamp: Date.now() });
}