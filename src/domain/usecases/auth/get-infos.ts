import { UserDb } from "../../../infra/data";
import { ServerError } from "../../../presentation/errors";
import { IHttpRequest, IUsecase } from "../../../utils/conventions";
import { InvalidParamError } from "../../../utils/errors";

export default class GetInfos implements IUsecase {
    constructor(private userDb: UserDb) {}

    async execute(httpRequest: IHttpRequest) {
        if (!this.userDb && !this.userDb.findFirst && !httpRequest.params && !httpRequest.params.ref) throw new ServerError()
        const ref = httpRequest.params.ref
        if(!ref.id) throw new InvalidParamError('token')
        const select = {
            id: true,
            name: true,
            email: true,
            counter: true,
            api_key: true,
            createdAt: true,
            updatedAt: true,
            role: false
        }

        if(ref.role === 'admin') select.role = true
        return await this.userDb.findFirst({ id: ref.id }, select )
    }
}