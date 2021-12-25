import { ListMessages } from "../../../domain/usecases/message";
import Controller from "../controller";

export default class GetMessages extends Controller <ListMessages>{
    constructor (usecase:  ListMessages) {
      super(usecase)
    }

  }