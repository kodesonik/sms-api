"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const repositories_1 = require("../../../infra/repositories");
const errors_1 = require("../../../presentation/errors");
const errors_2 = require("../../../utils/errors");
class SignIn {
    constructor(userDb, emailValidator, encrypter, tokenGenerator, cache) {
        this.userDb = userDb;
        this.emailValidator = emailValidator;
        this.encrypter = encrypter;
        this.tokenGenerator = tokenGenerator;
        this.cache = cache;
    }
    execute(httpRequest) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            if (!(this.userDb && this.userDb.findMany))
                throw new errors_1.ServerError();
            if (!httpRequest.body)
                throw new errors_2.MissingParamError('email, password');
            const login = new repositories_1.MakeLogin(httpRequest.body, this.emailValidator);
            const user = yield this.userDb.findFirst({ email: login.email });
            if (!user)
                throw new errors_2.InvalidParamError('email');
            if (!user.emailVerifiedAt)
                throw new Error('Confirm your email to proceed');
            if (!(yield this.encrypter.compare(login.password, user.password)))
                throw new errors_2.InvalidParamError('password');
            const token = yield this.tokenGenerator.generate({ id: user.id, role: user.role });
            yield this.cache.set(user.id, token);
            return { token };
        });
    }
}
exports.default = SignIn;
//# sourceMappingURL=sign-in.js.map