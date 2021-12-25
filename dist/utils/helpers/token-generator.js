"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const errors_1 = require("../errors");
const jsonwebtoken_1 = (0, tslib_1.__importDefault)(require("jsonwebtoken"));
class TokenGenerator {
    constructor(secret) {
        this.secret = secret;
    }
    generate(id) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            if (!this.secret) {
                throw new errors_1.MissingParamError('secret');
            }
            if (!id) {
                throw new errors_1.MissingParamError('id');
            }
            return jsonwebtoken_1.default.sign(id, this.secret);
        });
    }
    verify(token) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return yield jsonwebtoken_1.default.verify(token, this.secret);
        });
    }
}
exports.default = TokenGenerator;
//# sourceMappingURL=token-generator.js.map