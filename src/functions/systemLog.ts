import express from 'express';
import { CreateSystemLog, GetSystemLogs } from "../common/entities/systemLog.js";
import { CreateSystemLogCommand } from "../common/commands/SystemLog/CreateSystemLogCommand.js";

export async function getSystemLog (req: express.Request, res: express.Response) {
  const systemLogs = await GetSystemLogs();

  res.status(200).json(systemLogs);
};

export async function postSystemLog (req: express.Request, res: express.Response) {
  const command = new CreateSystemLogCommand(req.body.name);
  await CreateSystemLog(command);

  res.status(200).json({isRunning: "true", OperationSucceeded: "true"});
};
