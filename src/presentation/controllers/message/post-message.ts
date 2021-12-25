import { AddMessage } from "../../../domain/usecases/message";
import Controller from "../controller";

export default class PostMessage extends Controller <AddMessage>{
    constructor (usecase:  AddMessage) {
      super(usecase)
    }

  }