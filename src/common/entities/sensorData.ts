import { collection, add, all } from 'typesaurus';
import { CreateSensorDataCommand } from "../commands/SensorData/CreateSensorDataCommand.js";

type SensorData = {
    sensorName: string;
    value: number;
    timeStamp: number;
}

const sensorDataRepository = collection<SensorData>('SensorData');

export async function CreateSensorData (command: CreateSensorDataCommand) {
    add(sensorDataRepository, { sensorName: command.sensorName, value: command.value, timeStamp: command.timeStamp });
}

export async function GetSensorData () {
    return all(sensorDataRepository);
}