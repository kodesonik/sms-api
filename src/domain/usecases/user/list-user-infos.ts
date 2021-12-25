import { UserDb } from "../../../infra/data";
import { ServerError } from "../../../presentation/errors";
import { IHttpRequest, IUsecase } from "../../../utils/conventions";
import { MissingParamError } from "../../../utils/errors";

export default class ListUserInfos implements IUsecase {
    constructor(private userDb: UserDb) {}

    async execute(httpRequest: IHttpRequest) {
        if (!this.userDb && !this.userDb.findFirst && !httpRequest.params) throw new ServerError()
        const id = httpRequest.params.id
        if(!id) throw new MissingParamError('id')
        return await this.userDb.findFirst({ id }, {
            id: true,
            name: true,
            email: true,
            role: true,
            createdAt: true,
            updatedAt: true
        })
    }
}