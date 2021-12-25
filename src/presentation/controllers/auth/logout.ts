import { SignOut } from "../../../domain/usecases/auth";
import Controller from "../controller";

export default class Logout extends Controller <SignOut>{
    constructor (usecase:  SignOut) {
      super(usecase)
    }

  }
