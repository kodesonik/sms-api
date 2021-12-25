import { AddUser } from "../../../domain/usecases/user";
import { UserDb } from "../../../infra/data";
import { PostUser } from "../../../presentation/controllers/user";

export default class PostUserComposer {
    static compose () {
        const userDb = new UserDb()
        const usecase = new  AddUser(userDb)
        return new PostUser(usecase)
    }
  }