"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const errors_1 = require("../../presentation/errors");
const errors_2 = require("../../utils/errors");
class MakeUser {
    constructor(user) {
        const { id } = user, infos = (0, tslib_1.__rest)(user, ["id"]);
        this._data = infos;
        if (id) {
            this._ref = { id };
            this.update();
        }
        else {
            if (!this.data)
                throw new errors_1.ServerError();
            if (!this.data.email)
                throw new errors_2.MissingParamError('email');
            if (!this.data.name)
                throw new errors_2.MissingParamError('lastname');
            if (!this.data.password)
                throw new errors_2.MissingParamError('password');
            if (!this.data.createdAt)
                this.create();
            if (!this.data.role)
                this.setRole();
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
    update() {
        this._data.updatedAt = new Date();
    }
    setRole() {
        this._data.role = 'user';
    }
}
exports.default = MakeUser;
//# sourceMappingURL=make-user.js.map