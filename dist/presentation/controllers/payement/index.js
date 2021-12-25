"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetConfirmPayement = exports.GetPayements = exports.PostPayement = void 0;
const tslib_1 = require("tslib");
const post_payement_1 = (0, tslib_1.__importDefault)(require("./post-payement"));
exports.PostPayement = post_payement_1.default;
const get_payements_1 = (0, tslib_1.__importDefault)(require("./get-payements"));
exports.GetPayements = get_payements_1.default;
const get_confirm_payement_1 = (0, tslib_1.__importDefault)(require("./get-confirm-payement"));
exports.GetConfirmPayement = get_confirm_payement_1.default;
//# sourceMappingURL=index.js.map