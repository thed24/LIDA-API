"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postSensorData = exports.getSensorData = void 0;
const sensorData_js_1 = require("../common/models/sensorData.js");
function getSensorData(req, res) {
    const response = {
        sensorName: "oxygen",
        value: "2.25",
        timeStamp: "10-04-19 12:00:17",
    };
    res.status(200).json(response);
}
exports.getSensorData = getSensorData;
;
function postSensorData(req, res) {
    sensorData_js_1.CreateSensorData(req.body.sensorName, req.body.value);
    res.status(200).json({ isRunning: "true", OperationSucceeded: "true" });
}
exports.postSensorData = postSensorData;
;
//# sourceMappingURL=sensorData.js.map