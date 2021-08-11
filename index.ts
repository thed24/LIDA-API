import { getSensorData, postSensorData } from "./src/functions/sensorData.js";
import { getSystemLog, postSystemLog } from "./src/functions/systemLog.js";
import { putState } from "./src/functions/state.js";

import express from "express";
import cors from "cors";

const app = express();
app.use(cors({ origin: true }));

app.get("/SensorData", (req, res) => getSensorData(req, res));
app.post("/SensorData", (req, res) => postSensorData(req, res));

app.get("/SystemLog", (req, res) => getSystemLog(req, res));
app.post("/SystemLog", (req, res) => postSystemLog(req, res));

app.put("/State", (req, res) => putState(req, res));

module.exports.app = app;