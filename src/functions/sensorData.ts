import express from 'express';
import { CreateSensorData, GetSensorData } from "../common/entities/sensorData.js";
import { CreateSensorDataCommand } from "../common/commands/SensorData/CreateSensorDataCommand.js";

export async function getSensorData (req: express.Request, res: express.Response) : Promise<void> {
  const sensorData = await GetSensorData();

  res.status(200).json(sensorData);
}

export async function postSensorData (req: express.Request, res: express.Response) : Promise<void> {
  const command = new CreateSensorDataCommand(req.body.name, req.body.value);
  await CreateSensorData(command);

  res.status(200).json({ isRunning: "true", OperationSucceeded: "true" });
}
