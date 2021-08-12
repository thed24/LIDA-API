import express from 'express';
import { CreateSensorData, GetSensorData } from "../common/entities/sensorData.js";
import { CreateSensorDataCommand } from "../common/commands/SensorData/CreateSensorDataCommand.js";
import { GetSensorDataQuery } from '../common/queries/SensorData/GetSensorDataQuery.js';

export async function getSensorData (req: express.Request, res: express.Response) : Promise<void> {
  const filterRange = [Number(req.query.startDate), Number(req.query.endDate)];
  const getSensorsRequest = new GetSensorDataQuery(filterRange);
  const sensorData = await GetSensorData(getSensorsRequest);

  res.status(200).json(sensorData);
}

export async function postSensorData (req: express.Request, res: express.Response) : Promise<void> {
  const createSensorRequest = new CreateSensorDataCommand(req.body.sensorName, req.body.value);
  const createSensorResult = await CreateSensorData(createSensorRequest);

  res.status(200).json(createSensorResult);
}
