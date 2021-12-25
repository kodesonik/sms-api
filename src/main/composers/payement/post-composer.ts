import { AddPayement } from "../../../domain/usecases/payement"
import { PayementDb } from "../../../infra/data"
import { PostPayement } from "../../../presentation/controllers/payement"

export default class PostPayementComposer {
    static compose () {
        const payementDb = new PayementDb()
        const usecase = new AddPayement(payementDb)
        return new PostPayement(usecase)
    }
  }