import { RemoveUser } from "../../../domain/usecases/user";
import Controller from "../controller";

export default class DeleteUser extends Controller <RemoveUser>{
    constructor (usecase:  RemoveUser) {
      super(usecase)
    }
}