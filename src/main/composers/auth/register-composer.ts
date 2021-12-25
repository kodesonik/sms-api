import { SignUp } from "../../../domain/usecases/auth";
import { UserDb } from "../../../infra/data";
import { Register } from "../../../presentation/controllers/auth";
import EmailValidator from "../../../utils/helpers/email-validator";
import Encrypter from "../../../utils/helpers/encrypter";
import { Mailer } from "../../../utils/helpers/mailer";
import TokenGenerator from "../../../utils/helpers/token-generator";

export default class RegisterComposer {
    static compose () {
        const encrypter = new Encrypter()
        const tokenGenerator = new TokenGenerator(process.env.ACCESS_TOKEN_SECRET)
        const emailValidator = new EmailValidator()
        const mailer = new Mailer()
        const userDb = new UserDb()
        const usecase = new  SignUp(userDb, emailValidator, encrypter, tokenGenerator, mailer)
        return new Register(usecase)
    }
  }