"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const repositories_1 = require("../../../infra/repositories");
const errors_1 = require("../../../presentation/errors");
const errors_2 = require("../../../utils/errors");
class AddUser {
    constructor(userDb) {
        this.userDb = userDb;
    }
    execute(httpRequest) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            if (!(this.userDb && this.userDb.insertOne))
                throw new errors_1.ServerError();
            if (!httpRequest && !httpRequest.body)
                throw new errors_2.MissingParamError('httpRequest');
            const user = new repositories_1.MakeUser(httpRequest.body);
            return yield this.userDb.insertOne(user.data);
        });
    }
}
exports.default = AddUser;
//# sourceMappingURL=add-user.js.map