import { UserDb } from "../../../infra/data"
import { ServerError } from "../../../presentation/errors"
import { IHttpRequest } from "../../../utils/conventions"
import { MissingParamError } from "../../../utils/errors"
import TokenGenerator from "../../../utils/helpers/token-generator"

export default class Confirmation {
    constructor(private userDb: UserDb, private tokenGenerator: TokenGenerator) {
        
    }

    async execute(httpRequest: IHttpRequest)  {
        if (!(this.userDb && this.userDb.findMany && httpRequest && httpRequest.params)) throw new ServerError()
        const token = httpRequest.params.token
        if(!token) throw new MissingParamError('token')
        const value = await this.tokenGenerator.verify(token)
        const ref = {id: value.id}
        console.log(ref)
        let user = await this.userDb.findFirst(ref)
        if(!user) throw new Error('Invalid confirmation link.')
        if(user.emailVerifiedAt) throw new Error(`Email Already confirmed at ${ user.emailVerifiedAt}.`)
        user = await this.userDb.updateOne(ref, { emailVerifiedAt: new Date()})
        return `Hi ${ user.name }, your account is activated. <a src='http://localhost:4000/login '>Sign in now</a> and enjoy our services`
    }

}