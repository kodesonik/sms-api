"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const client_1 = require("@prisma/client");
class Query {
    constructor(collectionName) {
        const prisma = new client_1.PrismaClient();
        this.collection = prisma[collectionName];
    }
    findMany(startAt = 0, limit = 100, select, where) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return yield this.collection.findMany({
                take: limit,
                skip: startAt,
                select,
                where
            });
        });
    }
    findFirst(ref, select) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return yield this.collection.findFirst({ where: ref, select });
        });
    }
    insertOne(data) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return yield this.collection.create({ data });
        });
    }
    updateOne(ref, data) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return yield this.collection.update({ where: ref, data });
        });
    }
    deleteOne(ref) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return yield this.collection.delete({ where: ref });
        });
    }
    softDeleteOne(ref) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return yield this.collection.update({ where: ref, data: { deletedAt: new Date() } });
        });
    }
}
exports.default = Query;
//# sourceMappingURL=query.js.map