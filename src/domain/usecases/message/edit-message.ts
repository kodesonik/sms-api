import { MessageDb } from "../../../infra/data"
import { MakeMessage } from "../../../infra/repositories"
import { ServerError } from "../../../presentation/errors"
import { IUsecase, IHttpRequest } from "../../../utils/conventions"
import { MissingParamError } from "../../../utils/errors"

export default class EditMessage implements IUsecase {
    constructor(private messageDb: MessageDb) {}

    async execute(httpRequest: IHttpRequest) {
        if (!(this.messageDb && this.messageDb.updateOne)) throw new ServerError()
        if (!httpRequest && !httpRequest.body) throw new MissingParamError('httpRequest')
        const message = new MakeMessage(httpRequest.body)
        return await this.messageDb.updateOne(message.ref, message.data)
    }
}