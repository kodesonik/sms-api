"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../../../domain/usecases/user");
const data_1 = require("../../../infra/data");
const user_2 = require("../../../presentation/controllers/user");
class PatchUserComposer {
    static compose() {
        const userDb = new data_1.UserDb();
        const usecase = new user_1.EditUser(userDb);
        return new user_2.PatchUser(usecase);
    }
}
exports.default = PatchUserComposer;
//# sourceMappingURL=path-composer.js.map