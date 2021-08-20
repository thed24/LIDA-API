import { Body, Controller, Put, Route } from "tsoa";
import { UpdateStateCommand } from "../commands/state/UpdateStateCommand";
import { UpdateStateCommandDto } from "../commands/state/UpdateStateCommandDto";
import { putState } from "../handlers/stateHandler";

@Route("State")
export class StateController extends Controller {
  @Put()
  public async updateState(
    @Body() requestBody: UpdateStateCommand
  ): Promise<UpdateStateCommandDto> {
    return await putState(requestBody);
  }
}
