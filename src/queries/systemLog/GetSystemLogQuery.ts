class GetSystemLogQuery {
    dateTimeRange: Array<number>;

    constructor(dateTimeRange: Array<number>) { 
        this.dateTimeRange = dateTimeRange;
    }
}

export { GetSystemLogQuery }