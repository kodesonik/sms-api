"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const errors_1 = require("../../../presentation/errors");
const errors_2 = require("../../../utils/errors");
class ListUserInfos {
    constructor(userDb) {
        this.userDb = userDb;
    }
    execute(httpRequest) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            if (!this.userDb && !this.userDb.findFirst && !httpRequest.params)
                throw new errors_1.ServerError();
            const id = httpRequest.params.id;
            if (!id)
                throw new errors_2.MissingParamError('id');
            return yield this.userDb.findFirst({ id }, {
                id: true,
                name: true,
                email: true,
                role: true,
                createdAt: true,
                updatedAt: true
            });
        });
    }
}
exports.default = ListUserInfos;
//# sourceMappingURL=list-user-infos.js.map