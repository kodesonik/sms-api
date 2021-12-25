"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const repositories_1 = require("../../../infra/repositories");
const errors_1 = require("../../../presentation/errors");
const errors_2 = require("../../../utils/errors");
class AddPayement {
    constructor(payementDb) {
        this.payementDb = payementDb;
    }
    execute(httpRequest) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            if (!(this.payementDb && this.payementDb.insertOne))
                throw new errors_1.ServerError();
            if (!httpRequest && !httpRequest.body && !httpRequest.params && !httpRequest.params.ref)
                throw new errors_2.MissingParamError('httpRequest');
            const { id } = httpRequest.params.ref;
            if (!id)
                throw new errors_2.InvalidParamError('token');
            httpRequest.body.userId = id;
            const payement = new repositories_1.MakePayement(httpRequest.body);
            const data = yield this.payementDb.insertOne(payement.data);
            return { url: process.env.PAYEMENT_URL, identifier: data.id };
        });
    }
}
exports.default = AddPayement;
//# sourceMappingURL=add-payement.js.map