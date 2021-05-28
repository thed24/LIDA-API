exports.getSensorData = ((req, res) => {
  const response = { key: "value" };
  res.status(200).json(response);
});

exports.postSensorData = ((req, res) => {
  res.status(200).send("1");
});
