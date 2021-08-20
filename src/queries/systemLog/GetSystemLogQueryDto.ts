class GetSystemLogQueryDto {
    sensorName: string;
    timeStamp: number;

    constructor(sensorName: string, timeStamp: number) { 
        this.sensorName = sensorName;
        this.timeStamp = timeStamp;
    }
}

export { GetSystemLogQueryDto }