# LIDA-API

This is a REST API utilising the CQRS design pattern being exposed via Google Clouds serverless functions.

# Contracts

## POST /{base_address}/Sensor

## Request
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

## GET /{base_address}/Sensor

## Request
```
{
    Query: dateTimeRange
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

## Request
```
{
    IsRunning: bool
}
```

## Response
```
{
    IsRunning: boolean,
    OperationSucceeded: boolean
}
```

## Consumers

Front-End URL: *Coming soon*

Hardware URL: *Coming soon*