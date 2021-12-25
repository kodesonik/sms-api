import { RemoveUser } from "../../../domain/usecases/user";
import { UserDb } from "../../../infra/data";
import { DeleteUser } from "../../../presentation/controllers/user";

export default class DeleteUserComposer {
    static compose () {
        const userDb = new UserDb()
        const usecase = new  RemoveUser(userDb)
        return new DeleteUser(usecase)
    }
  }