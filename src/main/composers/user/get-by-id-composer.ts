import { ListUserInfos } from "../../../domain/usecases/user";
import { UserDb } from "../../../infra/data";
import { GetUser } from "../../../presentation/controllers/user";

export default class GetUserByIdComposer {
    static compose () {
        const userDb = new UserDb()
        const usecase = new ListUserInfos(userDb)
        return new GetUser(usecase)
    }
  }