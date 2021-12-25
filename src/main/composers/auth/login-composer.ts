import { SignIn } from "../../../domain/usecases/auth";
import { UserDb } from "../../../infra/data";
import { Login } from "../../../presentation/controllers/auth";
import Cache from "../../../utils/helpers/cache";
import EmailValidator from "../../../utils/helpers/email-validator";
import Encrypter from "../../../utils/helpers/encrypter";
import TokenGenerator from "../../../utils/helpers/token-generator";

export default class LoginComposer {
    static compose () {
        const encrypter = new Encrypter()
        const tokenGenerator = new TokenGenerator(process.env.ACCESS_TOKEN_SECRET)
        const emailValidator = new EmailValidator()
        const cache = new Cache()
        const userDb = new UserDb()
        const usecase = new  SignIn(userDb, emailValidator, encrypter, tokenGenerator, cache)
        return new Login(usecase)
    }
  }