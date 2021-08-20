import {
  CreateSensorData,
  GetSensorData,
} from "../common/entities/sensorData.js";
import { CreateSensorDataCommand } from "../commands/sensorData/CreateSensorDataCommand.js";
import { GetSensorDataQuery } from "../queries/sensorData/GetSensorDataQuery.js";
import { CreateSensorDataCommandDto } from "../commands/sensorData/CreateSensorDataCommandDto.js";
import { GetSensorDataQueryDto } from "../queries/sensorData/GetSensorDataQueryDto.js";

export async function getSensorData(
  filterRange: number[]
): Promise<GetSensorDataQueryDto[]> {
  const query = new GetSensorDataQuery(filterRange);
  return await GetSensorData(query);
}

export async function postSensorData(
  command: CreateSensorDataCommand
): Promise<CreateSensorDataCommandDto> {
  return await CreateSensorData(command);
}
