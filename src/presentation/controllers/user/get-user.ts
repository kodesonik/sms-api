import { ListUserInfos } from "../../../domain/usecases/user";
import Controller from "../controller";

export default class GetUser extends Controller <ListUserInfos>{
    constructor (usecase: ListUserInfos ) {
      super(usecase)
    }
  }