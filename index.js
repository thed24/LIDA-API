const { getSensorData, postSensorData } = require("./src/functions/sensorData");
const express = require("express");
const cors = require("cors");
const port = 3000;

const app = express();
app.use(cors({ origin: true }));

app.get("/SensorData", (req, res) => getSensorData(req, res));
app.post("/SensorData", (req, res) => postSensorData(req, res));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

exports.app = async (req, res) => {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
};
