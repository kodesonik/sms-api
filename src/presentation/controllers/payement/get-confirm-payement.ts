import { EditPayement } from "../../../domain/usecases/payement";
import Controller from "../controller";

export default class GetConfirmPayement extends Controller <EditPayement>{
    constructor (usecase:  EditPayement) {
      super(usecase)
    }

  }