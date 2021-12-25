"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const query_1 = (0, tslib_1.__importDefault)(require("./query"));
class MessageDb extends query_1.default {
    constructor() {
        super('message');
    }
}
exports.default = MessageDb;
//# sourceMappingURL=message-db.js.map