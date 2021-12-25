"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUser = exports.DeleteUser = exports.PatchUser = exports.PostUser = exports.GetUsers = void 0;
const tslib_1 = require("tslib");
const get_users_1 = (0, tslib_1.__importDefault)(require("./get-users"));
exports.GetUsers = get_users_1.default;
const post_user_1 = (0, tslib_1.__importDefault)(require("./post-user"));
exports.PostUser = post_user_1.default;
const patch_user_1 = (0, tslib_1.__importDefault)(require("./patch-user"));
exports.PatchUser = patch_user_1.default;
const delete_user_1 = (0, tslib_1.__importDefault)(require("./delete-user"));
exports.DeleteUser = delete_user_1.default;
const get_user_1 = (0, tslib_1.__importDefault)(require("./get-user"));
exports.GetUser = get_user_1.default;
//# sourceMappingURL=index.js.map