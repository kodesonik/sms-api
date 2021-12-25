"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const errors_1 = require("../../../presentation/errors");
const errors_2 = require("../../../utils/errors");
class ListPayements {
    constructor(payementDb) {
        this.payementDb = payementDb;
    }
    execute(httpRequest) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            if (!this.payementDb && !this.payementDb.findMany && !httpRequest.params && !httpRequest.params.ref)
                throw new errors_1.ServerError();
            const { id, role } = httpRequest.params.ref;
            if (!id && !role)
                throw new errors_2.MissingParamError('token');
            let selectWhere;
            const select = {
                id: true,
                method: true,
                amount: true,
                status: true,
                createdAt: true,
                confirmedAt: true,
                user: undefined
            };
            if (role === 'admin')
                select.user = { select: { id: true, lastname: true, firstname: true, email: true } };
            else if (role === 'user')
                selectWhere = { userId: id };
            return yield this.payementDb.findMany(0, 100, select, selectWhere);
        });
    }
}
exports.default = ListPayements;
//# sourceMappingURL=list-payements.js.map