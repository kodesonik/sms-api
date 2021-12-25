import { EditUser } from "../../../domain/usecases/user";
import Controller from "../controller";

export default class PatchUser extends Controller <EditUser>{
    constructor (usecase:  EditUser) {
      super(usecase)
    }

  }