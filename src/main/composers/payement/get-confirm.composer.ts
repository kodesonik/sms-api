import { EditPayement } from "../../../domain/usecases/payement"
import { PayementDb } from "../../../infra/data"
import { GetConfirmPayement } from "../../../presentation/controllers/payement"

export default class GetConfirmPayementComposer {
    static compose () {
        const payementDb = new PayementDb()
        const usecase = new EditPayement(payementDb)
        return new GetConfirmPayement(usecase)
    }
  }