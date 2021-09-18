import requests
import random

base_url = "https://australia-southeast1-lida-api-313611.cloudfunctions.net/rest-api"

system_logs = [
    "Motor",
    "Motion"
]

def create_system_log_payload(sensor):
    return {"sensorName": sensor}

sensors = [
    "Temperature",
    "Moisture",
    "Methane",
    "Oxygen",
    "Carbon Dioxide"
]

def create_sensor_data_payload(sensor, value):
    return {"sensorName": sensor, "value:": value}

for i in range(1, 100):
    print("Creating system log {}".format(i))
    mock_data = create_system_log_payload(random.choice(system_logs))
    response = requests.post(f'{base_url}/SystemLog', mock_data)
    print(response.text)

for i in range(1, 100):
    print("Creating sensor data {}".format(i))
    mock_data = create_sensor_data_payload(random.choice(sensors), random.randint(1, 100))
    response = requests.post(f'{base_url}/SensorData', mock_data)
    print(response.text)