import { ListPayements } from "../../../domain/usecases/payement";
import Controller from "../controller";

export default class GetPayements extends Controller <ListPayements>{
    constructor (usecase:  ListPayements) {
      super(usecase)
    }

  }