# LIDA-API

This is a REST API utilising the CQRS design pattern being exposed via Google Clouds serverless functions.

# Table of Contents

- [LIDA-API](#lida-api)
- [Table of Contents](#table-of-contents)
  - [Contracts](#contracts)
  - [Deployment](#deployment)
  - [Consumers](#consumers)
## Contracts
```
{
	"components": {
		"examples": {},
		"headers": {},
		"parameters": {},
		"requestBodies": {},
		"responses": {},
		"schemas": {
			"GetSensorDataQueryDto": {
				"properties": {
					"sensorName": {
						"type": "string"
					},
					"value": {
						"type": "number",
						"format": "double"
					},
					"timeStamp": {
						"type": "number",
						"format": "double"
					}
				},
				"required": [
					"sensorName",
					"value",
					"timeStamp"
				],
				"type": "object",
				"additionalProperties": false
			},
			"CreateSensorDataCommandDto": {
				"properties": {
					"isRunning": {
						"type": "boolean"
					},
					"operationSucceeded": {
						"type": "boolean"
					}
				},
				"required": [
					"isRunning",
					"operationSucceeded"
				],
				"type": "object",
				"additionalProperties": false
			},
			"UpdateStateCommandDto": {
				"properties": {
					"isRunning": {
						"type": "boolean"
					},
					"operationSucceeded": {
						"type": "boolean"
					}
				},
				"required": [
					"isRunning",
					"operationSucceeded"
				],
				"type": "object",
				"additionalProperties": false
			},
			"UpdateStateCommand": {
				"properties": {
					"isRunning": {
						"type": "boolean"
					}
				},
				"required": [
					"isRunning"
				],
				"type": "object",
				"additionalProperties": false
			},
			"GetSystemLogQueryDto": {
				"properties": {
					"sensorName": {
						"type": "string"
					},
					"timeStamp": {
						"type": "number",
						"format": "double"
					}
				},
				"required": [
					"sensorName",
					"timeStamp"
				],
				"type": "object",
				"additionalProperties": false
			},
			"CreateSystemLogCommandDto": {
				"properties": {
					"isRunning": {
						"type": "boolean"
					},
					"operationSucceeded": {
						"type": "boolean"
					}
				},
				"required": [
					"isRunning",
					"operationSucceeded"
				],
				"type": "object",
				"additionalProperties": false
			}
		},
		"securitySchemes": {}
	},
	"info": {
		"title": "lida-api",
		"version": "1.0.0",
		"description": "This is a REST API utilising the CQRS design pattern being exposed via Google Clouds serverless functions.",
		"license": {
			"name": "ISC"
		},
		"contact": {}
	},
	"openapi": "3.0.0",
	"paths": {
		"/SensorData": {
			"get": {
				"operationId": "ReadSensorData",
				"responses": {
					"200": {
						"description": "Ok",
						"content": {
							"application/json": {
								"schema": {
									"items": {
										"$ref": "#/components/schemas/GetSensorDataQueryDto"
									},
									"type": "array"
								}
							}
						}
					}
				},
				"security": [],
				"parameters": [
					{
						"in": "query",
						"name": "startDate",
						"required": true,
						"schema": {
							"format": "double",
							"type": "number"
						}
					},
					{
						"in": "query",
						"name": "endDate",
						"required": true,
						"schema": {
							"format": "double",
							"type": "number"
						}
					}
				]
			},
			"post": {
				"operationId": "CreateSensorData",
				"responses": {
					"201": {
						"description": "Created",
						"content": {
							"application/json": {
								"schema": {
									"$ref": "#/components/schemas/CreateSensorDataCommandDto"
								}
							}
						}
					}
				},
				"security": [],
				"parameters": []
			}
		},
		"/State": {
			"put": {
				"operationId": "UpdateState",
				"responses": {
					"200": {
						"description": "Ok",
						"content": {
							"application/json": {
								"schema": {
									"$ref": "#/components/schemas/UpdateStateCommandDto"
								}
							}
						}
					}
				},
				"security": [],
				"parameters": [],
				"requestBody": {
					"required": true,
					"content": {
						"application/json": {
							"schema": {
								"$ref": "#/components/schemas/UpdateStateCommand"
							}
						}
					}
				}
			}
		},
		"/SystemLog": {
			"get": {
				"operationId": "ReadSystemLog",
				"responses": {
					"200": {
						"description": "Ok",
						"content": {
							"application/json": {
								"schema": {
									"items": {
										"$ref": "#/components/schemas/GetSystemLogQueryDto"
									},
									"type": "array"
								}
							}
						}
					}
				},
				"security": [],
				"parameters": [
					{
						"in": "query",
						"name": "startDate",
						"required": true,
						"schema": {
							"format": "double",
							"type": "number"
						}
					},
					{
						"in": "query",
						"name": "endDate",
						"required": true,
						"schema": {
							"format": "double",
							"type": "number"
						}
					}
				]
			},
			"post": {
				"operationId": "CreateSystemLog",
				"responses": {
					"201": {
						"description": "Created",
						"content": {
							"application/json": {
								"schema": {
									"$ref": "#/components/schemas/CreateSystemLogCommandDto"
								}
							}
						}
					}
				},
				"security": [],
				"parameters": []
			}
		}
	},
	"servers": [
		{
			"url": "/"
		}
	]
}
```

## Deployment
The project comes with an 'ops' folder that contains powershell and bash scripts that automate the deployment process. For example, the runTerraform script will stand up the stack, as long as it's provided with the proper Google Cloud key. Similarily, the destroyTerraform script will tear the stack down. Along with this, there are are scripts to generate mock data for testing purposes. The mock data can be evaluated using the Postman collection provided.

## Consumers
Front-End: https://github.com/Flumm3ry/LidaUi

Hardware: *Coming soon*