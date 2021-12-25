import { ServerError } from "../../../presentation/errors"
import { IHttpRequest, IUsecase } from "../../../utils/conventions"
import { MessageDb } from "../../../infra/data"
import { MissingParamError } from "../../../utils/errors"

export default class ListMessages implements IUsecase {
    constructor(private messageDb: MessageDb) {}

    async execute(httpRequest: IHttpRequest) {
        if (!this.messageDb && !this.messageDb.findMany && !httpRequest.params && !httpRequest.params.ref) throw new ServerError()
        const { id, role } = httpRequest.params.ref
        if (!id && !role) throw new MissingParamError('token')
        let selectWhere
        const select = {
            id: true,
            senderName: true,
            receiverContact: true,
            status: true,
            createdAt: true,
            user: undefined
        }
        if (role === 'admin')  select.user =  { select: { id: true, name : true, counter: true, email: true } }
        else if (role === 'user') selectWhere = { userId: id }
        return await this.messageDb.findMany(0, 100, select, selectWhere)
      
    }
}