"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../../utils/errors");
class MakeLogin {
    constructor(data, emailValidator) {
        this._email = data.email;
        this._password = data.password;
        if (!this.email)
            throw new errors_1.MissingParamError('email');
        if (!emailValidator.isValid(this.email))
            throw new errors_1.InvalidParamError('email');
        if (!this.password)
            throw new errors_1.MissingParamError('password');
        if (this.password.length < 8)
            throw new errors_1.InvalidParamError('password');
    }
    get email() {
        return this._email;
    }
    get password() {
        return this._password;
    }
}
exports.default = MakeLogin;
//# sourceMappingURL=make-login.js.map