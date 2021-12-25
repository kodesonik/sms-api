import { UserDb } from "../../../infra/data";
import { MakeUser } from "../../../infra/repositories";
import { ServerError } from "../../../presentation/errors";
import { IHttpRequest, IUsecase } from "../../../utils/conventions";
import { MissingParamError } from "../../../utils/errors";

export default class AddUser implements IUsecase {
    constructor(private userDb: UserDb) {}

    async execute(httpRequest: IHttpRequest) {
        if (!(this.userDb && this.userDb.insertOne)) throw new ServerError()
        if (!httpRequest && !httpRequest.body) throw new MissingParamError('httpRequest')
        const user = new MakeUser(httpRequest.body)
        return await this.userDb.insertOne(user.data)
    }
}