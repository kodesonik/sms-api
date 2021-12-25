import { EditMessage } from "../../../domain/usecases/message";
import Controller from "../controller";

export default class GetConfirmMessage extends Controller <EditMessage>{
    constructor (usecase:  EditMessage) {
      super(usecase)
    }

  }