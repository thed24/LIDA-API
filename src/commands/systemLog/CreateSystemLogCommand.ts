class CreateSystemLogCommand {
    sensorName: string;
    timeStamp: number;

    constructor(sensorName: string) { 
        this.sensorName = sensorName;
        this.timeStamp = Date.now();
    }
}

export { CreateSystemLogCommand }