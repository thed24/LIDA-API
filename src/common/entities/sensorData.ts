import { collection, add, query, where } from "typesaurus";
import { CreateSensorDataCommand } from "../../commands/sensorData/CreateSensorDataCommand.js";
import { CreateSensorDataCommandDto } from "../../commands/sensorData/CreateSensorDataCommandDto.js";
import { SensorData } from "../interfaces/sensorData.js";
import { GetSensorDataQuery } from "../../queries/sensorData/GetSensorDataQuery.js";
import { GetSensorDataQueryDto } from "../../queries/sensorData/GetSensorDataQueryDto.js";
import { GetState } from "./state.js";

const sensorDataRepository = collection<SensorData>("SensorData");

export async function CreateSensorData(
  command: CreateSensorDataCommand
): Promise<CreateSensorDataCommandDto> {
  add(sensorDataRepository, {
    sensorName: command.sensorName,
    value: command.value,
    timeStamp: command.timeStamp,
  });

  const isRunning = await GetState();
  return new CreateSensorDataCommandDto(isRunning, true);
}

export async function GetSensorData(
  sensorDataQuery: GetSensorDataQuery
): Promise<GetSensorDataQueryDto[]> {
  const startOfRange = sensorDataQuery.dateTimeRange[0];
  const endOfRange = sensorDataQuery.dateTimeRange[1];

  const sensorData = await query(sensorDataRepository, [
    where("timeStamp", ">=", startOfRange),
    where("timeStamp", "<=", endOfRange),
  ]);
  return sensorData.map((sensorData) => {
    return new GetSensorDataQueryDto(
      sensorData.data.sensorName,
      sensorData.data.value,
      sensorData.data.timeStamp
    );
  });
}
