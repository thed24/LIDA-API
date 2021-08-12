import { collection, get, update } from 'typesaurus'
import { UpdateStateCommand } from '../commands/State/UpdateStateCommand';
import { UpdateStateCommandDto } from '../commands/State/UpdateStateCommandDto';

type State = {
    isRunning: boolean
}

const stateRepository = collection<State>('State');

export async function UpdateState (command: UpdateStateCommand) : Promise<UpdateStateCommandDto> {
    const isRunning = command.isRunning;
    update(stateRepository, "1", { isRunning });

    return new UpdateStateCommandDto(isRunning, true);
}

export async function GetState() : Promise<boolean> {
    return (await (get(stateRepository, '1'))).data.isRunning;
}