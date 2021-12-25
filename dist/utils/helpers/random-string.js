"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const crypto_1 = (0, tslib_1.__importDefault)(require("crypto"));
exports.default = length => crypto_1.default.randomBytes(length).toString('hex');
//# sourceMappingURL=random-string.js.map