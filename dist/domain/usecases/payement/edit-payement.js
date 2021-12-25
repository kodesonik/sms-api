"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const repositories_1 = require("../../../infra/repositories");
const errors_1 = require("../../../presentation/errors");
const errors_2 = require("../../../utils/errors");
class EditPayement {
    constructor(payementDb) {
        this.payementDb = payementDb;
    }
    execute(httpRequest) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            if (!(this.payementDb && this.payementDb.updateOne))
                throw new errors_1.ServerError();
            if (!httpRequest && !httpRequest.body)
                throw new errors_2.MissingParamError('httpRequest');
            const oldData = yield this.payementDb.findFirst({ id: httpRequest.body.identifier });
            const message = new repositories_1.MakePayement(httpRequest.body, oldData);
            return yield this.payementDb.updateOne(message.ref, message.data);
        });
    }
}
exports.default = EditPayement;
//# sourceMappingURL=edit-payement.js.map