import { UserDb } from "../../../infra/data";
import { MakeLogin, MakeUser } from "../../../infra/repositories";
import { ServerError } from "../../../presentation/errors";
import { IHttpRequest } from "../../../utils/conventions";
import { MissingParamError } from "../../../utils/errors";
import EmailValidator from "../../../utils/helpers/email-validator";
import Encrypter from "../../../utils/helpers/encrypter";
import { Mailer } from "../../../utils/helpers/mailer";
import randomString from "../../../utils/helpers/random-string";
import TokenGenerator from "../../../utils/helpers/token-generator";

export default class SignUp {
    constructor(private userDb: UserDb, private emailValidator: EmailValidator, private encrypter: Encrypter, private tokenGenerator: TokenGenerator, private mailer: Mailer) {
        
    }

    async execute(httpRequest: IHttpRequest)  {
        if (!(this.userDb && this.userDb.findMany)) throw new ServerError()
        if (!httpRequest.body) throw new MissingParamError('email, password')

        const login = new MakeLogin(httpRequest.body, this.emailValidator)
        httpRequest.body.email = login.email
        const oldUser = await this.userDb.findFirst({ email: login.email})
        if (oldUser) throw new Error('User with the same email already exists. Sign in to proceed or use another email.')

        httpRequest.body.password = await this.encrypter.hash(login.password)
        const data = new MakeUser(httpRequest.body).data
        data.api_key = randomString(10)
        const user = await this.userDb.insertOne(data)
        const token = await this.tokenGenerator.generate({ id: user.id})
        this.mailer.send(user.email, 'Account confirmation', `<a href="http://localhost:4000/api/validation/${ token }">Confirm my registration</a>`)
        // send email with this token
        return {message: `Check your mail box ${ user.email } and confirm your registration to proceed.`}

    }
}