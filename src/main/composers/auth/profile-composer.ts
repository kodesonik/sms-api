import { GetInfos } from "../../../domain/usecases/auth";
import { UserDb } from "../../../infra/data";
import { Profile } from "../../../presentation/controllers/auth";

export default class ProfileComposer {
    static compose () {
        const userDb = new UserDb()
        const usecase = new GetInfos(userDb)
        return new Profile(usecase)
    }
  }