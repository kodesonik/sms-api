"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const auth_1 = require("../../../domain/usecases/auth");
const data_1 = require("../../../infra/data");
const auth_2 = require("../../../presentation/controllers/auth");
const email_validator_1 = (0, tslib_1.__importDefault)(require("../../../utils/helpers/email-validator"));
const encrypter_1 = (0, tslib_1.__importDefault)(require("../../../utils/helpers/encrypter"));
const mailer_1 = require("../../../utils/helpers/mailer");
const token_generator_1 = (0, tslib_1.__importDefault)(require("../../../utils/helpers/token-generator"));
class RegisterComposer {
    static compose() {
        const encrypter = new encrypter_1.default();
        const tokenGenerator = new token_generator_1.default(process.env.ACCESS_TOKEN_SECRET);
        const emailValidator = new email_validator_1.default();
        const mailer = new mailer_1.Mailer();
        const userDb = new data_1.UserDb();
        const usecase = new auth_1.SignUp(userDb, emailValidator, encrypter, tokenGenerator, mailer);
        return new auth_2.Register(usecase);
    }
}
exports.default = RegisterComposer;
//# sourceMappingURL=register-composer.js.map