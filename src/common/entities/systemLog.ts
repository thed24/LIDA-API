import { collection, add, all } from 'typesaurus'
import { CreateSystemLogCommand } from "../commands/SystemLog/CreateSystemLogCommand.js";

type SystemLog = {
    sensorName: string;
    timeStamp: number;
}

const systemLogRepository = collection<SystemLog>('SensorData');

export async function CreateSystemLog (command: CreateSystemLogCommand) {
    add(systemLogRepository, { sensorName: command.sensorName, timeStamp:command.timeStamp });
}

export async function GetSystemLogs () {
    return all(systemLogRepository);
}