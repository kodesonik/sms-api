import { UserDb } from "../../../infra/data";
import { MakeLogin } from "../../../infra/repositories";
import { ServerError } from "../../../presentation/errors";
import { IHttpRequest, IUsecase } from "../../../utils/conventions";
import { InvalidParamError, MissingParamError } from "../../../utils/errors";
import Cache from "../../../utils/helpers/cache";
import EmailValidator from "../../../utils/helpers/email-validator";
import Encrypter from "../../../utils/helpers/encrypter";
import TokenGenerator from "../../../utils/helpers/token-generator";

export default class SignIn implements IUsecase {
    constructor(
        private userDb: UserDb, 
        private emailValidator: EmailValidator, 
        private encrypter: Encrypter, 
        private tokenGenerator: TokenGenerator,
        private cache: Cache) {}

    async execute(httpRequest: IHttpRequest) {
        if (!(this.userDb && this.userDb.findMany)) throw new ServerError()
        if (!httpRequest.body) throw new MissingParamError('email, password')
        const login = new MakeLogin(httpRequest.body, this.emailValidator)
        const user = await this.userDb.findFirst({ email: login.email })
        if (!user) throw new InvalidParamError('email')
        if (!user.emailVerifiedAt) throw new Error('Confirm your email to proceed')
        if (! await this.encrypter.compare(login.password, user.password)) throw new InvalidParamError('password')
       const token = await this.tokenGenerator.generate({ id: user.id, role: user.role})
       await this.cache.set(user.id, token)
        return { token }
    }
}