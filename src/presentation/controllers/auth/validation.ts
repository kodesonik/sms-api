import { Confirmation } from "../../../domain/usecases/auth";
import Controller from "../controller";

export default class Validation extends Controller <Confirmation>{
    constructor (usecase:  Confirmation) {
      super(usecase)
    }

  }
