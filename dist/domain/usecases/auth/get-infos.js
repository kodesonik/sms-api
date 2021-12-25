"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const errors_1 = require("../../../presentation/errors");
const errors_2 = require("../../../utils/errors");
class GetInfos {
    constructor(userDb) {
        this.userDb = userDb;
    }
    execute(httpRequest) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            if (!this.userDb && !this.userDb.findFirst && !httpRequest.params && !httpRequest.params.ref)
                throw new errors_1.ServerError();
            const ref = httpRequest.params.ref;
            if (!ref.id)
                throw new errors_2.InvalidParamError('token');
            const select = {
                id: true,
                name: true,
                email: true,
                counter: true,
                api_key: true,
                createdAt: true,
                updatedAt: true,
                role: false
            };
            if (ref.role === 'admin')
                select.role = true;
            return yield this.userDb.findFirst({ id: ref.id }, select);
        });
    }
}
exports.default = GetInfos;
//# sourceMappingURL=get-infos.js.map