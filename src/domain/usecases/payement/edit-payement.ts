import { PayementDb } from "../../../infra/data"
import { MakePayement } from "../../../infra/repositories"
import { ServerError } from "../../../presentation/errors"
import { IUsecase, IHttpRequest } from "../../../utils/conventions"
import { MissingParamError } from "../../../utils/errors"

export default class EditPayement implements IUsecase {
    constructor(private payementDb: PayementDb) {}

    async execute(httpRequest: IHttpRequest) {
        if (!(this.payementDb && this.payementDb.updateOne)) throw new ServerError()
        if (!httpRequest && !httpRequest.body) throw new MissingParamError('httpRequest')
        const oldData = await this.payementDb.findFirst({ id: httpRequest.body.identifier})
        const message = new MakePayement(httpRequest.body, oldData)
        return await this.payementDb.updateOne(message.ref, message.data)
    }
}