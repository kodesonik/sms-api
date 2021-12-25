import { ListPayements } from "../../../domain/usecases/payement"
import { PayementDb } from "../../../infra/data"
import { GetPayements } from "../../../presentation/controllers/payement"

export default class GetPayementsComposer {
    static compose () {
        const payementDb = new PayementDb()
        const usecase = new ListPayements(payementDb)
        return new GetPayements(usecase)
    }
  }