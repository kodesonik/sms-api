import { AddPayement } from "../../../domain/usecases/payement";
import Controller from "../controller";

export default class PostPayement extends Controller <AddPayement>{
    constructor (usecase:  AddPayement) {
      super(usecase)
    }

  }