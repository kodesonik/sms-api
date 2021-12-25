import { GetInfos } from "../../../domain/usecases/auth";
import Controller from "../controller";

export default class Profile extends Controller <GetInfos>{
    constructor (usecase:  GetInfos) {
      super(usecase)
    }

  }
