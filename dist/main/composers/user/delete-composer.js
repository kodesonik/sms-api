"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../../../domain/usecases/user");
const data_1 = require("../../../infra/data");
const user_2 = require("../../../presentation/controllers/user");
class DeleteUserComposer {
    static compose() {
        const userDb = new data_1.UserDb();
        const usecase = new user_1.RemoveUser(userDb);
        return new user_2.DeleteUser(usecase);
    }
}
exports.default = DeleteUserComposer;
//# sourceMappingURL=delete-composer.js.map