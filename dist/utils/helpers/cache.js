"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const util_1 = require("util");
const redis_1 = (0, tslib_1.__importDefault)(require("redis"));
class Cache {
    constructor(dbName) {
        this.client = redis_1.default.createClient(dbName);
        this.client.on("error", function (error) {
            console.error(error);
        });
    }
    set(key, value) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            yield this.client.set(key, value);
        });
    }
    arrayPush(key, value) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            yield this.client.lpush(key, value);
        });
    }
    get(key) {
        const getAsync = (0, util_1.promisify)(this.client.get).bind(this.client);
        return getAsync(key);
    }
    find(key, val) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.get(key);
            console.log('result', res);
            return res === val;
        });
    }
    findInArray(key, value) {
        const getAsync = (0, util_1.promisify)(this.client.lpos).bind(this.client);
        return getAsync(key, value);
    }
    removetAt(array, value) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            this.client.lrem(array, 1, value);
        });
    }
}
exports.default = Cache;
//# sourceMappingURL=cache.js.map