"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const errors_1 = require("../../../presentation/errors");
const errors_2 = require("../../../utils/errors");
class Confirmation {
    constructor(userDb, tokenGenerator) {
        this.userDb = userDb;
        this.tokenGenerator = tokenGenerator;
    }
    execute(httpRequest) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            if (!(this.userDb && this.userDb.findMany && httpRequest && httpRequest.params))
                throw new errors_1.ServerError();
            const token = httpRequest.params.token;
            if (!token)
                throw new errors_2.MissingParamError('token');
            const value = yield this.tokenGenerator.verify(token);
            const ref = { id: value.id };
            console.log(ref);
            let user = yield this.userDb.findFirst(ref);
            if (!user)
                throw new Error('Invalid confirmation link.');
            if (user.emailVerifiedAt)
                throw new Error(`Email Already confirmed at ${user.emailVerifiedAt}.`);
            user = yield this.userDb.updateOne(ref, { emailVerifiedAt: new Date() });
            return `Hi ${user.name}, your account is activated. <a src='http://localhost:4000/login '>Sign in now</a> and enjoy our services`;
        });
    }
}
exports.default = Confirmation;
//# sourceMappingURL=confrirmation.js.map