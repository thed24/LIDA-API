class CreateSensorDataCommand {
    sensorName: string;
    value: number;
    timeStamp: number;

    constructor(sensorName: string, value: number) { 
        this.sensorName = sensorName;
        this.value = value;
        this.timeStamp = Date.now();
    }
}

export { CreateSensorDataCommand }