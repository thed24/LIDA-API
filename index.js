"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sensorData_js_1 = require("./src/functions/sensorData.js");
const systemLog_js_1 = require("./src/functions/systemLog.js");
const state_js_1 = require("./src/functions/state.js");
const admin = __importStar(require("firebase-admin"));
admin.initializeApp();
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