class GetSensorDataQuery {
    dateTimeRange: Array<number>;

    constructor(query: Array<number>) { 
        this.dateTimeRange = query;
    }
}

export { GetSensorDataQuery }