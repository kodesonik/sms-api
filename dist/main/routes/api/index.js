"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const tslib_1 = require("tslib");
const user_1 = (0, tslib_1.__importDefault)(require("./user"));
const auth_1 = (0, tslib_1.__importDefault)(require("./auth"));
const payement_1 = (0, tslib_1.__importDefault)(require("./payement"));
const message_1 = (0, tslib_1.__importDefault)(require("./message"));
exports.routes = [
    auth_1.default,
    user_1.default,
    payement_1.default,
    message_1.default
];
//# sourceMappingURL=index.js.map