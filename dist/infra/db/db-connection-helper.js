"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const client_1 = require("@prisma/client");
class DbConnectionHelper {
    static connect() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            this.prisma = new client_1.PrismaClient();
            yield this.prisma.$connect();
            return this.prisma;
        });
    }
    static disconnect() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            yield this.prisma.$disconnect();
        });
    }
}
exports.default = DbConnectionHelper;
//# sourceMappingURL=db-connection-helper.js.map