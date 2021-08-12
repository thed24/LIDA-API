class GetSensorDataQueryDto {
    sensorName: string;
    value: number;
    timeStamp: number;

    constructor(sensorName: string, value: number, timeStamp: number) { 
        this.sensorName = sensorName;
        this.value = value;
        this.timeStamp = timeStamp;
    }
}

export { GetSensorDataQueryDto }