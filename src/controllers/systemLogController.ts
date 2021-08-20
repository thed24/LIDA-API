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
import { CreateSystemLogCommand } from "../commands/systemLog/CreateSystemLogCommand";
import { CreateSystemLogCommandDto } from "../commands/systemLog/CreateSystemLogCommandDto";
import { postSystemLog, getSystemLog } from "../handlers/systemLogHandler";
import { GetSystemLogQueryDto } from "../queries/systemLog/GetSystemLogQueryDto";

@Route("SystemLog")
export class SystemLogController extends Controller {
  @Get()
  public async readSystemLog(
    @Query() startDate: number,
    @Query() endDate: number
  ): Promise<GetSystemLogQueryDto[]> {
    const filterRange = [startDate, endDate];
    return await getSystemLog(filterRange);
  }

  @SuccessResponse("201", "Created")
  @Post()
  public async createSystemLog(
    @BodyProp() sensorName: string
  ): Promise<CreateSystemLogCommandDto> {
    const requestBody = new CreateSystemLogCommand(sensorName);
    this.setStatus(201);
    return await postSystemLog(requestBody);
  }
}
