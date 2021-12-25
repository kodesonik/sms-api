import { SignUp } from "../../../domain/usecases/auth";
import Controller from "../controller";

export default class Register extends Controller <SignUp>{
    constructor (usecase:  SignUp) {
      super(usecase)
    }

  }
