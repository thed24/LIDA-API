"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sensorData_js_1 = require("./src/functions/sensorData.js");
const systemLog_js_1 = require("./src/functions/systemLog.js");
const state_js_1 = require("./src/functions/state.js");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
app.use(cors_1.default({ origin: true }));
app.get("/SensorData", (req, res) => sensorData_js_1.getSensorData(req, res));
app.post("/SensorData", (req, res) => sensorData_js_1.postSensorData(req, res));
app.get("/SystemLog", (req, res) => systemLog_js_1.getSystemLog(req, res));
app.post("/SystemLog", (req, res) => systemLog_js_1.postSystemLog(req, res));
app.put("/State", (req, res) => state_js_1.putState(req, res));
module.exports.app = app;
//# sourceMappingURL=index.js.map