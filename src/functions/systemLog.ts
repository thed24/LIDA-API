import express from 'express';
import { CreateSystemLog, GetSystemLogs } from "../common/entities/systemLog.js";
import { CreateSystemLogCommand } from "../common/commands/SystemLog/CreateSystemLogCommand.js";
import { GetSystemLogQuery } from '../common/queries/SystemLog/GetSystemLogQuery.js';

export async function getSystemLog (req: express.Request, res: express.Response) : Promise<void> {
  const filterRange = [Number(req.query.startDate), Number(req.query.endDate)];
  const getSensorsRequest = new GetSystemLogQuery(filterRange);
  const systemLogs = await GetSystemLogs(getSensorsRequest);

  res.status(200).json(systemLogs);
}

export async function postSystemLog (req: express.Request, res: express.Response) : Promise<void> {
  const createSystemLogRequest = new CreateSystemLogCommand(req.body.sensorName);
  const createSystemLogResult = await CreateSystemLog(createSystemLogRequest);

  res.status(200).json(createSystemLogResult);
}
