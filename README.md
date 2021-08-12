# LIDA-API

This is a REST API utilising the CQRS design pattern being exposed via Google Clouds serverless functions.

# Contracts

## POST /{base_address}/SensorData

## Request Body
```
{
    Name: string,
    Value: decimal,
    TimeStamp: dateTime
}
```
## Response
```
{
    IsRunning: boolean,
    OperationSucceeded: boolean
}
```

## GET /{base_address}/SensorData

## Request Query Parameters
```
{
    startDate: number,
    endDate: number
}
```

## Response
```
{
    [
        Name: string,
        Value: decimal,
        TimeStamp: dateTime
    ]
}
```

## PUT /{base_address}/State

## Request Body
```
{
    IsRunning: boolean
}
```

## Response
```
{
    IsRunning: boolean,
    OperationSucceeded: boolean
}
```
## POST /{base_address}/SystemLog

## Request Body
```
{
    Name: string,
    TimeStamp: dateTime
}
```
## Response
```
{
    IsRunning: boolean,
    OperationSucceeded: boolean
}
```

## GET /{base_address}/SystemLog

## Request Query Parameters
```
{
    startDate: number,
    endDate: number
}
```

## Response
```
{
    [
        Name: string,
        TimeStamp: dateTime
    ]
}
```

## Consumers

Front-End URL: *Coming soon*

Hardware URL: *Coming soon*