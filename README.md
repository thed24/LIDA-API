# LIDA-API

This is a REST API utilising the CQRS design pattern being exposed via Google Clouds serverless functions.

# Table of Contents

- [LIDA-API](#lida-api)
- [Table of Contents](#table-of-contents)
	- [Architecture](#architecture)
	- [Deployment and Operations](#deployment-and-operations)
		- [Local](#local)
		- [Ops](#ops)
	- [Tests](#tests)
	- [Consumers](#consumers)
	- [Contracts](#contracts)

## Architecture

This API was designed *restfully*, meaning that it conforms to the architecterual constraints of REST. These constraints are not fully defined, but act as guidelines that can be left up to the interpretation of the developer. This API has several resources defined, each with there own HTTP method. Please refer to the contract section of the guide for an in-depth showcase of the API contracts.

This API is split across several Google Cloud functions written in TypeScript. This was to allow us to leverage TypeScripts strongly typed functionality, and furthermore segregate each resource into its own independent serverless function so they can be edited without affecting the other functions.

The overall architectural design pattern being followed by this restful serverless API is CQRS, or the Command and Query Responsibility Segregation pattern. It revolves around seperating commands (create or updates) and queries (reads) to allow for complex domains to be easily manager with several different models as opposed to sharing them across operations. Albeit the domain within this project is quite small, this allows flexibility if the project demands it as it grows. It is quite simple to extend this pattern, by creating a new *controller*, and underneath it a new *handler*, which will deal with *commands / queries*. See the [MSDN for more info](https://docs.microsoft.com/en-us/azure/architecture/patterns/cqrs).

## Deployment and Operations

### Local 
- To run the project locally, use ```npm run dev``` and point the postman collection against the supplied local-host URL.
- To update the contracts, use ```npm run build```, which will re-create the Swagger Docs contracts and update the internal contracts used for the controllers.

### Ops
- The project comes with an 'ops' folder that contains powershell and bash scripts that automate the deployment process. For example, the runTerraform script will stand up the stack, as long as it's provided with the proper Google Cloud key. Similarily, the destroyTerraform script will tear the stack down. Along with this, there are are scripts to generate mock data for testing purposes. The mock data can be evaluated using the Postman collection provided.
- As aforementioned, this project requires a Google Cloud key to be placed within the 'ops' folder to function. This is due to the fact that this program utilises Google Cloud services such as FireStore and Cloud Functions. As such, a new Google Cloud project and matching JSON key are required to stand up a new seperate deployment stack. [See Googles documents for more info](https://cloud.google.com/resource-manager/docs/creating-managing-projects).
- As FireStore is the database of choice for this project and the project was designed to be cost-effective, no additional redudancy options have been set-up in the resource configurations. The option for automated back-ups of data exist however it is up-to the choice of the user.

## Tests

To run the test suite, use ```npm run test```. There are several high-level mocked out tests of the controllers, however due to the nature of this application being a simple CRUD server with no domain or business logic and being heavily reliant on well tested frameworks to orchestrate a majority of the logic, the testing suite is quite minimal. The test suite utilises purely the Jest framework.
## Consumers
Front-End: https://github.com/Flumm3ry/LidaUi

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