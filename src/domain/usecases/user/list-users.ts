import { UserDb } from "../../../infra/data";
import { ServerError } from "../../../presentation/errors";
import { IUsecase } from "../../../utils/conventions";

export default class ListUsers implements IUsecase {
    constructor(private userDb: UserDb) {}

    async execute() {
        if (!this.userDb && !this.userDb.findMany) throw new ServerError()
        return await this.userDb.findMany(0, 100, {
            id: true,
            name: true,
            email: true,
            createdAt: true,
            counter: true
        })
    }
}