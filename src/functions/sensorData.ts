import express from 'express';
import { CreateSensorData} from "../common/models/sensorData.js";

export function getSensorData (req: express.Request, res: express.Response) {
  const response = {
    sensorName: "oxygen",
    value: "2.25",
    timeStamp: "10-04-19 12:00:17",
  };
  res.status(200).json(response);
};

export function postSensorData (req: express.Request, res: express.Response) {
  CreateSensorData(req.body.sensorName, req.body.value);
  res.status(200).json({ isRunning: "true", OperationSucceeded: "true" });
};
