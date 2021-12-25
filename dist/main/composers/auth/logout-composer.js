"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const auth_1 = require("../../../domain/usecases/auth");
const auth_2 = require("../../../presentation/controllers/auth");
const cache_1 = (0, tslib_1.__importDefault)(require("../../../utils/helpers/cache"));
class LogoutComposer {
    static compose() {
        const cache = new cache_1.default('token');
        const usecase = new auth_1.SignOut(cache);
        return new auth_2.Logout(usecase);
    }
}
exports.default = LogoutComposer;
//# sourceMappingURL=logout-composer.js.map