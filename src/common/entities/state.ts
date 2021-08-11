import { collection, get, update } from 'typesaurus'

type State = {
    isRunning: boolean
}

const stateRepository = collection<State>('State');

export async function UpdateState (isRunning: boolean) {
    update(stateRepository, "1", { isRunning });
}

export async function GetState() {
    return get(stateRepository, '1');
}