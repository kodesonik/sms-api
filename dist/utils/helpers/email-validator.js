"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const validator_1 = (0, tslib_1.__importDefault)(require("validator"));
const errors_1 = require("../errors");
class EmailValidator {
    isValid(email) {
        if (!email) {
            throw new errors_1.MissingParamError('email');
        }
        return validator_1.default.isEmail(email);
    }
}
exports.default = EmailValidator;
//# sourceMappingURL=email-validator.js.map