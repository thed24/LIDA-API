import { SensorDataController } from "../sensorDataController";
import { GetSensorDataQueryDto } from "../../queries/sensorData/GetSensorDataQueryDto";
import { CreateSensorDataCommandDto } from "../../commands/sensorData/CreateSensorDataCommandDto";

jest.mock("../../common/entities/sensorData", () => ({
  CreateSensorData: () => new CreateSensorDataCommandDto(true, true),
  GetSensorData: () => [
    new GetSensorDataQueryDto(
      "test1",
      1, 
      1
    ),
    new GetSensorDataQueryDto(
      "test2",
      2, 
      2
    ),
    new GetSensorDataQueryDto(
      "test3",
      3, 
      3
    ),
  ]
}))

it("should return read DTO", async () => {
    //arrange
    const controller = new SensorDataController();
    const expected = [
        new GetSensorDataQueryDto("test1", 1, 1), 
        new GetSensorDataQueryDto("test2", 2, 2), 
        new GetSensorDataQueryDto("test3", 3, 3),
    ];

    //act
    var actual = await controller.readSensorData(1, 999999);

    //assert
    expect(actual).toEqual(expected);
});

it("should return create DTO", async () => {
    //arrange
    const controller = new SensorDataController();
    const expected = new CreateSensorDataCommandDto(true, true);

    //act
    var actual = await controller.createSensorData("testData", 1);

    //assert
    expect(actual).toEqual(expected);
});