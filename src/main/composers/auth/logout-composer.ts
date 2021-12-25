import { SignOut } from "../../../domain/usecases/auth";
import { Logout } from "../../../presentation/controllers/auth";
import Cache from "../../../utils/helpers/cache";


export default class LogoutComposer {
    static compose () {
        const cache = new Cache()
        const usecase = new  SignOut(cache)
        return new Logout(usecase)
    }
  }