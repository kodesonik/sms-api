import { PayementDb } from "../../../infra/data"
import { MakePayement } from "../../../infra/repositories"
import { ServerError } from "../../../presentation/errors"
import { IUsecase, IHttpRequest } from "../../../utils/conventions"
import { InvalidParamError, MissingParamError } from "../../../utils/errors"

export default class AddPayement implements IUsecase {
    constructor(private payementDb: PayementDb) {}

    async execute(httpRequest: IHttpRequest) {
        if (!(this.payementDb && this.payementDb.insertOne)) throw new ServerError()
        if (!httpRequest && !httpRequest.body && !httpRequest.params && !httpRequest.params.ref) throw new MissingParamError('httpRequest')
        const { id } = httpRequest.params.ref
        if (!id) throw new InvalidParamError('token')
        httpRequest.body.userId = id
        const payement = new MakePayement(httpRequest.body)
        const data = await this.payementDb.insertOne(payement.data)
        return { url: process.env.PAYEMENT_URL, identifier: data.id}
    }
}