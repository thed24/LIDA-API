class UpdateStateCommandDto {
    isRunning: boolean;
    operationSucceeded: boolean;

    constructor(isRunning: boolean, operationSucceeded: boolean) { 
        this.isRunning = isRunning;
        this.operationSucceeded = operationSucceeded;
    }
}

export { UpdateStateCommandDto }