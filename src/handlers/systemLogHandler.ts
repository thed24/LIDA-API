import {
  CreateSystemLog,
  GetSystemLogs,
} from "../common/entities/systemLog.js";
import { CreateSystemLogCommand } from "../commands/systemLog/CreateSystemLogCommand.js";
import { GetSystemLogQuery } from "../queries/systemLog/GetSystemLogQuery.js";
import { GetSystemLogQueryDto } from "../queries/systemLog/GetSystemLogQueryDto.js";
import { CreateSystemLogCommandDto } from "../commands/systemLog/CreateSystemLogCommandDto.js";

export async function getSystemLog(
  filterRange: number[]
): Promise<GetSystemLogQueryDto[]> {
  const getSensorsRequest = new GetSystemLogQuery(filterRange);
  return await GetSystemLogs(getSensorsRequest);
}

export async function postSystemLog(
  command: CreateSystemLogCommand
): Promise<CreateSystemLogCommandDto> {
  return await CreateSystemLog(command);
}
