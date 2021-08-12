import { collection, add, query, where } from 'typesaurus'
import { CreateSystemLogCommand } from "../commands/SystemLog/CreateSystemLogCommand.js";
import { CreateSystemLogCommandDto } from "../commands/SystemLog/CreateSystemLogCommandDto.js";
import { GetSystemLogQuery } from '../queries/SystemLog/GetSystemLogQuery.js';
import { GetSystemLogQueryDto } from '../queries/SystemLog/GetSystemLogQueryDto.js';
import { GetState } from './state.js';

type SystemLog = {
    sensorName: string;
    timeStamp: number;
}

const systemLogRepository = collection<SystemLog>('SystemLog');

export async function CreateSystemLog (command: CreateSystemLogCommand) : Promise<CreateSystemLogCommandDto> {
    add(systemLogRepository, { sensorName: command.sensorName, timeStamp:command.timeStamp });

    const isRunning = await GetState();
    return new CreateSystemLogCommandDto(isRunning, true);
}

export async function GetSystemLogs (getSystemLogQuery: GetSystemLogQuery) : Promise<GetSystemLogQueryDto[]> {
    const startOfRange = getSystemLogQuery.dateTimeRange[0];
    const endOfRange = getSystemLogQuery.dateTimeRange[1];

    const systemLogs = await query(systemLogRepository, [where('timeStamp', '>=', startOfRange), where('timeStamp', '<=', endOfRange)]);
    return systemLogs.map(systemLog => { return new GetSystemLogQueryDto(systemLog.data.sensorName, systemLog.data.timeStamp) });
}