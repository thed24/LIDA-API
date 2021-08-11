import express from 'express';

export function putState (req: express.Request, res: express.Response) {
  const response = { isRunning: "true", operationSucceeded: "true" };
  res.status(200).json(response);
};