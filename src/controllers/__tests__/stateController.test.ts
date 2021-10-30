import { StateController } from "../stateController";
import { UpdateStateCommandDto } from "../../commands/state/UpdateStateCommandDto";
import { UpdateStateCommand } from "../../commands/state/UpdateStateCommand";

jest.mock("../../common/entities/state", () => ({
    UpdateState: () => new UpdateStateCommandDto(true, true)   
})); 

it("Update State Test", async () => {
    //arrange
    const controller = new StateController();
    const expected = new UpdateStateCommandDto(true, true);

    //act
    var actual = await controller.updateState(new UpdateStateCommand(true));

    //assert
    expect(actual).toEqual(expected);
});