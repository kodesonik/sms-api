"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const auth_1 = require("../../../domain/usecases/auth");
const data_1 = require("../../../infra/data");
const auth_2 = require("../../../presentation/controllers/auth");
const cache_1 = (0, tslib_1.__importDefault)(require("../../../utils/helpers/cache"));
const email_validator_1 = (0, tslib_1.__importDefault)(require("../../../utils/helpers/email-validator"));
const encrypter_1 = (0, tslib_1.__importDefault)(require("../../../utils/helpers/encrypter"));
const token_generator_1 = (0, tslib_1.__importDefault)(require("../../../utils/helpers/token-generator"));
class LoginComposer {
    static compose() {
        const encrypter = new encrypter_1.default();
        const tokenGenerator = new token_generator_1.default(process.env.ACCESS_TOKEN_SECRET);
        const emailValidator = new email_validator_1.default();
        const cache = new cache_1.default('token');
        const userDb = new data_1.UserDb();
        const usecase = new auth_1.SignIn(userDb, emailValidator, encrypter, tokenGenerator, cache);
        return new auth_2.Login(usecase);
    }
}
exports.default = LoginComposer;
//# sourceMappingURL=login-composer.js.map