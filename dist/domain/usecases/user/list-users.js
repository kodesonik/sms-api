"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const errors_1 = require("../../../presentation/errors");
class ListUsers {
    constructor(userDb) {
        this.userDb = userDb;
    }
    execute() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            if (!this.userDb && !this.userDb.findMany)
                throw new errors_1.ServerError();
            return yield this.userDb.findMany(0, 100, {
                id: true,
                name: true,
                email: true,
                createdAt: true,
                counter: true
            });
        });
    }
}
exports.default = ListUsers;
//# sourceMappingURL=list-users.js.map