"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const auth_1 = require("../../../domain/usecases/auth");
const data_1 = require("../../../infra/data");
const auth_2 = require("../../../presentation/controllers/auth");
const token_generator_1 = (0, tslib_1.__importDefault)(require("../../../utils/helpers/token-generator"));
class ValidationComposer {
    static compose() {
        const tokenGenerator = new token_generator_1.default(process.env.ACCESS_TOKEN_SECRET);
        const userDb = new data_1.UserDb();
        const usecase = new auth_1.Confirmation(userDb, tokenGenerator);
        return new auth_2.Validation(usecase);
    }
}
exports.default = ValidationComposer;
//# sourceMappingURL=validation-composer.js.map