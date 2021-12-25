"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const errors_1 = require("../../../presentation/errors");
class SignOut {
    constructor(cache) {
        this.cache = cache;
    }
    execute(httpRequest) {
        var _a;
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const token = httpRequest.params.token;
            const id = (_a = httpRequest.params.ref) === null || _a === void 0 ? void 0 : _a.id;
            if (!token)
                return new errors_1.ServerError();
            yield this.cache.set(id, null);
            return { message: 'logout successfully' };
        });
    }
}
exports.default = SignOut;
//# sourceMappingURL=sign-out.js.map