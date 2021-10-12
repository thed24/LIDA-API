import { CreateSensorDataCommand } from "../../commands/sensorData/CreateSensorDataCommand";
import { GetSystemLogQueryDto } from "../../queries/systemLog/GetSystemLogQueryDto";
import { SystemLogController } from "../systemLogController";

it("should return read DTO", () => {
  // Arrange
  const controller = new SystemLogController();
  const expected = [
    new GetSystemLogQueryDto("test", 1),
    new GetSystemLogQueryDto("test", 2),
    new GetSystemLogQueryDto("test", 3),
  ];

  // Act
  var readDto = controller.readSystemLog(1, 999999);

  // Assert
  expect(readDto).toEqual(expected);
});

it("should return create DTO", () => {
    // Arrange
    const controller = new SystemLogController();
    const expected = new CreateSensorDataCommand("test", 1);
  
    // Act
    var readDto = controller.createSystemLog("test");
  
    // Assert
    expect(readDto).toEqual(expected);
  });