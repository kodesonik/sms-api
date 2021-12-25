"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageDb = exports.PayementDb = exports.UserDb = void 0;
const tslib_1 = require("tslib");
const user_db_1 = (0, tslib_1.__importDefault)(require("./user-db"));
exports.UserDb = user_db_1.default;
const payement_db_1 = (0, tslib_1.__importDefault)(require("./payement-db"));
exports.PayementDb = payement_db_1.default;
const message_db_1 = (0, tslib_1.__importDefault)(require("./message-db"));
exports.MessageDb = message_db_1.default;
//# sourceMappingURL=index.js.map