"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const errors_1 = require("../../presentation/errors");
const errors_2 = require("../../utils/errors");
class MakePayement {
    constructor(payement, oldPayement) {
        const { id } = payement, infos = (0, tslib_1.__rest)(payement, ["id"]);
        this._data = infos;
        if (id) {
            this._ref = { id };
            if (!oldPayement)
                throw new errors_1.ServerError();
            if (payement.amount !== +oldPayement.amount)
                this._data.status = "invalid";
            else if (this._data.status == "0")
                this._data.status = 'success';
        }
        else {
            if (!this.data)
                throw new errors_1.ServerError();
            if (!this.data.amount)
                throw new errors_2.MissingParamError('amount');
            if (!this.data.provider)
                throw new errors_2.MissingParamError('provider');
            if (!this.data.method)
                throw new errors_2.MissingParamError('method');
            if (!this.data.createdAt)
                this.create();
            if (!this.data.status)
                this.setStatus();
        }
    }
    get ref() {
        return this._ref;
    }
    get data() {
        return this._data;
    }
    create() {
        this._data.createdAt = new Date();
    }
    setStatus() {
        this._data.status = 'pending';
    }
}
exports.default = MakePayement;
//# sourceMappingURL=make-payement.js.map