import express from 'express';
import { UpdateStateCommand } from '../common/commands/State/UpdateStateCommand';
import { UpdateState } from '../common/entities/state';

export async function putState (req: express.Request, res: express.Response) : Promise<void> {
  const updateStateRequest = new UpdateStateCommand(req.body.isRunning);
  const updateStateResponse = await UpdateState(updateStateRequest);

  res.status(200).json(updateStateResponse);
}