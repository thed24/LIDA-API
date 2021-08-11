import express from 'express';

export function getSystemLog (req: express.Request, res: express.Response) {
  const response = {
    sensorName: "motor",
    timeStamp: "10-04-19 12:00:17",
  };
  res.status(200).json(response);
};

export function postSystemLog (req: express.Request, res: express.Response) {
  res.status(200).json({isRunning: "true", OperationSucceeded: "true"});
};
