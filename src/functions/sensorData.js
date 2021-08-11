"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postSensorData = exports.getSensorData = void 0;
const sensorData_js_1 = require("../common/entities/sensorData.js");
const CreateSensorDataCommand_js_1 = require("../common/commands/SensorData/CreateSensorDataCommand.js");
function getSensorData(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const sensorData = yield sensorData_js_1.GetSensorData();
        res.status(200).json(sensorData);
    });
}
exports.getSensorData = getSensorData;
;
function postSensorData(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const command = new CreateSensorDataCommand_js_1.CreateSensorDataCommand(req.body.name, req.body.value);
        yield sensorData_js_1.CreateSensorData(command);
        res.status(200).json({ isRunning: "true", OperationSucceeded: "true" });
    });
}
exports.postSensorData = postSensorData;
;
//# sourceMappingURL=sensorData.js.map