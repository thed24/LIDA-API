import { collection, add, query, where } from "typesaurus";
import { CreateSystemLogCommand } from "../../commands/systemLog/CreateSystemLogCommand.js";
import { CreateSystemLogCommandDto } from "../../commands/systemLog/CreateSystemLogCommandDto.js";
import { SystemLog } from "../interfaces/systemLog.js";
import { GetSystemLogQuery } from "../../queries/systemLog/GetSystemLogQuery.js";
import { GetSystemLogQueryDto } from "../../queries/systemLog/GetSystemLogQueryDto.js";
import { GetState } from "./state.js";

const systemLogRepository = collection<SystemLog>("SystemLog");

export async function CreateSystemLog(
  command: CreateSystemLogCommand
): Promise<CreateSystemLogCommandDto> {
  add(systemLogRepository, {
    sensorName: command.sensorName,
    timeStamp: command.timeStamp,
  });

  const isRunning = await GetState();
  return new CreateSystemLogCommandDto(isRunning, true);
}

export async function GetSystemLogs(
  getSystemLogQuery: GetSystemLogQuery
): Promise<GetSystemLogQueryDto[]> {
  const startOfRange = getSystemLogQuery.dateTimeRange[0];
  const endOfRange = getSystemLogQuery.dateTimeRange[1];

  const systemLogs = await query(systemLogRepository, [
    where("timeStamp", ">=", startOfRange),
    where("timeStamp", "<=", endOfRange),
  ]);
  return systemLogs.map((systemLog) => {
    return new GetSystemLogQueryDto(
      systemLog.data.sensorName,
      systemLog.data.timeStamp
    );
  });
}
