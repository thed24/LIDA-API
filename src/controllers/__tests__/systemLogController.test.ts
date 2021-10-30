import { SystemLogController } from "../systemLogController";
import { GetSystemLogQueryDto } from "../../queries/systemLog/GetSystemLogQueryDto";
import { CreateSystemLogCommandDto } from "../../commands/systemLog/CreateSystemLogCommandDto";

jest.mock("../../common/entities/systemLog", () => ({
  CreateSystemLog: () => new CreateSystemLogCommandDto(true, true),
  GetSystemLogs: () => [
    new GetSystemLogQueryDto(
      "test1",
      1
    ),
    new GetSystemLogQueryDto(
      "test2",
      2
    ),
    new GetSystemLogQueryDto(
      "test3",
      3
    )
  ]
}))

it("should return read DTO", async () => {
  // Arrange
  const controller = new SystemLogController();
  const expected = [
    new GetSystemLogQueryDto("test1", 1),
    new GetSystemLogQueryDto("test2", 2),
    new GetSystemLogQueryDto("test3", 3),
  ];

  // Act
  var actual = await controller.readSystemLog(1, 999999);

  // Assert
  expect(actual).toEqual(expected);
});

it("should return create DTO", async () => {
    // Arrange
    const controller = new SystemLogController();
    const expected = new CreateSystemLogCommandDto(true, true);
  
    // Act
    var actual = await controller.createSystemLog("testLog");
  
    // Assert
    expect(actual).toEqual(expected);
  });