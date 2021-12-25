"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const repositories_1 = require("../../../infra/repositories");
const errors_1 = require("../../../presentation/errors");
const errors_2 = require("../../../utils/errors");
const random_string_1 = (0, tslib_1.__importDefault)(require("../../../utils/helpers/random-string"));
class SignUp {
    constructor(userDb, emailValidator, encrypter, tokenGenerator, mailer) {
        this.userDb = userDb;
        this.emailValidator = emailValidator;
        this.encrypter = encrypter;
        this.tokenGenerator = tokenGenerator;
        this.mailer = mailer;
    }
    execute(httpRequest) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            if (!(this.userDb && this.userDb.findMany))
                throw new errors_1.ServerError();
            if (!httpRequest.body)
                throw new errors_2.MissingParamError('email, password');
            const login = new repositories_1.MakeLogin(httpRequest.body, this.emailValidator);
            httpRequest.body.email = login.email;
            const oldUser = yield this.userDb.findFirst({ email: login.email });
            if (oldUser)
                throw new Error('User with the same email already exists. Sign in to proceed or use another email.');
            httpRequest.body.password = yield this.encrypter.hash(login.password);
            const data = new repositories_1.MakeUser(httpRequest.body).data;
            data.api_key = (0, random_string_1.default)(10);
            const user = yield this.userDb.insertOne(data);
            const token = yield this.tokenGenerator.generate({ id: user.id });
            this.mailer.send(user.email, 'Account confirmation', `<a href="http://localhost:4000/api/validation/${token}">Confirm my registration</a>`);
            return { message: `Check your mail box ${user.email} and confirm your registration to proceed.` };
        });
    }
}
exports.default = SignUp;
//# sourceMappingURL=sign-up.js.map