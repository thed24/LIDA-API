import { UpdateStateCommand } from "../commands/state/UpdateStateCommand";
import { UpdateStateCommandDto } from "../commands/state/UpdateStateCommandDto";
import { UpdateState } from "../common/entities/state";

export async function putState(
  command: UpdateStateCommand
): Promise<UpdateStateCommandDto> {
  return await UpdateState(command);
}
