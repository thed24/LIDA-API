class UpdateStateCommand {
    isRunning: boolean;

    constructor(isRunning: boolean) { 
        this.isRunning = isRunning;
    }
}

export { UpdateStateCommand }