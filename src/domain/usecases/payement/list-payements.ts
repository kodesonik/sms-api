import { PayementDb } from "../../../infra/data";
import { ServerError } from "../../../presentation/errors";
import { IUsecase, IHttpRequest } from "../../../utils/conventions";
import { MissingParamError } from "../../../utils/errors";

export default class ListPayements implements IUsecase {
    constructor(private payementDb: PayementDb) {}

    async execute(httpRequest: IHttpRequest) {
        if (!this.payementDb && !this.payementDb.findMany && !httpRequest.params && !httpRequest.params.ref) throw new ServerError()
        const { id, role } = httpRequest.params.ref
        if (!id && !role) throw new MissingParamError('token')
        let selectWhere 
        const select = {
            id: true,
            method: true,
            amount: true,
            status: true,
            createdAt: true,
            confirmedAt: true,
            user: undefined
        }
        if (role === 'admin')  select.user =  { select: { id: true, lastname : true, firstname: true, email: true } }
        else if (role === 'user') selectWhere = { userId: id }
        return await this.payementDb.findMany(0, 100, select, selectWhere)
    }
}