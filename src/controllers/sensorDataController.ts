import {
  Body,
  BodyProp,
  Controller,
  Get,
  Post,
  Query,
  Route,
  SuccessResponse,
} from "tsoa";
import { CreateSensorDataCommand } from "../commands/sensorData/CreateSensorDataCommand";
import { CreateSensorDataCommandDto } from "../commands/sensorData/CreateSensorDataCommandDto";
import { getSensorData, postSensorData } from "../handlers/sensorDataHandler";
import { GetSensorDataQueryDto } from "../queries/sensorData/GetSensorDataQueryDto";

@Route("SensorData")
export class SensorDataController extends Controller {
  @Get()
  public async readSensorData(
    @Query() startDate: number,
    @Query() endDate: number
  ): Promise<GetSensorDataQueryDto[]> {
    const filterRange = [startDate, endDate];
    return await getSensorData(filterRange);
  }

  @SuccessResponse("201", "Created")
  @Post()
  public async createSensorData(
    @BodyProp() sensorName: string,
    @BodyProp() value: number,
  ): Promise<CreateSensorDataCommandDto> {
    const requestBody = new CreateSensorDataCommand(sensorName, value);
    this.setStatus(201);
    return await postSensorData(requestBody);
  }
}
