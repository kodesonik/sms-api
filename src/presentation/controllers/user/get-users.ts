import { ListUsers } from "../../../domain/usecases/user";
import Controller from "../controller";

export default class GetUsers extends Controller <ListUsers>{
    constructor (usecase: ListUsers ) {
      super(usecase)
    }
  }