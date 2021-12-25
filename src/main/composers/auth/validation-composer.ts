import { Confirmation } from "../../../domain/usecases/auth"
import { UserDb } from "../../../infra/data"
import { Validation } from "../../../presentation/controllers/auth"
import TokenGenerator from "../../../utils/helpers/token-generator"


export default class ValidationComposer {
    static compose () {
         const tokenGenerator = new TokenGenerator(process.env.ACCESS_TOKEN_SECRET)
         const userDb = new UserDb()
        const usecase = new Confirmation(userDb, tokenGenerator)
        return new Validation(usecase)
    }
  }