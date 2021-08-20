import { collection, get, upset } from "typesaurus";
import { UpdateStateCommand } from "../../commands/state/UpdateStateCommand";
import { UpdateStateCommandDto } from "../../commands/state/UpdateStateCommandDto";
import { State } from "../interfaces/state";

const stateRepository = collection<State>("State");

export async function UpdateState(
  command: UpdateStateCommand
): Promise<UpdateStateCommandDto> {
  const isRunning = command.isRunning;
  upset(stateRepository, "1", { isRunning });

  return new UpdateStateCommandDto(isRunning, true);
}

export async function GetState(): Promise<boolean> {
  return (await get(stateRepository, "1")).data.isRunning;
}
