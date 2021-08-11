import express from 'express';

export async function putState (req: express.Request, res: express.Response) : Promise<void> {
  const response = { isRunning: "true", operationSucceeded: "true" };
  res.status(200).json(response);
}