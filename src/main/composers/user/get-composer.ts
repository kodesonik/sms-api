import { ListUsers } from "../../../domain/usecases/user";
import { UserDb } from "../../../infra/data";
import { GetUsers } from "../../../presentation/controllers/user";

export default class GetUsersComposer {
    static compose () {
        const userDb = new UserDb()
        const usecase = new ListUsers(userDb)
        return new GetUsers(usecase)
    }
  }