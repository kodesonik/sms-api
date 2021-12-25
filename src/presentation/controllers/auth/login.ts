import { SignIn } from "../../../domain/usecases/auth";
import Controller from "../controller";

export default class Login extends Controller <SignIn>{
    constructor (usecase:  SignIn) {
      super(usecase)
    }

  }
