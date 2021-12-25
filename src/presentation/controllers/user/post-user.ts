import AddUser from "../../../domain/usecases/user/add-user";
import Controller from "../controller";

export default class PostUser extends Controller <AddUser>{
    constructor (usecase:  AddUser) {
      super(usecase)
    }

  }