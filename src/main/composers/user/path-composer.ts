import { EditUser } from "../../../domain/usecases/user";
import { UserDb } from "../../../infra/data";
import { PatchUser } from "../../../presentation/controllers/user";

export default class PatchUserComposer {
    static compose () {
        const userDb = new UserDb()
        const usecase = new  EditUser(userDb)
        return new PatchUser(usecase)
    }
  }