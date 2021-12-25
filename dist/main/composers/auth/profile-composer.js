"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("../../../domain/usecases/auth");
const data_1 = require("../../../infra/data");
const auth_2 = require("../../../presentation/controllers/auth");
class ProfileComposer {
    static compose() {
        const userDb = new data_1.UserDb();
        const usecase = new auth_1.GetInfos(userDb);
        return new auth_2.Profile(usecase);
    }
}
exports.default = ProfileComposer;
//# sourceMappingURL=profile-composer.js.map