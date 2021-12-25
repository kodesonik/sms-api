"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_router_adapter_1 = (0, tslib_1.__importDefault)(require("../../adapters/express-router-adapter"));
const auth_check_1 = (0, tslib_1.__importDefault)(require("../../middlewares/auth-check"));
const admin_check_1 = (0, tslib_1.__importDefault)(require("../../middlewares/admin-check"));
const user_1 = require("../../composers/user");
exports.default = router => {
    router.get('/user', auth_check_1.default, admin_check_1.default, express_router_adapter_1.default.adapt(user_1.GetUsersComposer.compose()));
    router.get('/user/:id', auth_check_1.default, admin_check_1.default, express_router_adapter_1.default.adapt(user_1.GetUserByIdComposer.compose()));
    router.post('/user', auth_check_1.default, admin_check_1.default, express_router_adapter_1.default.adapt(user_1.PostUserComposer.compose()));
    router.patch('/user', auth_check_1.default, admin_check_1.default, express_router_adapter_1.default.adapt(user_1.PatchUserComposer.compose()));
    router.delete('/user', auth_check_1.default, admin_check_1.default, express_router_adapter_1.default.adapt(user_1.DeleteUserComposer.compose()));
};
//# sourceMappingURL=user.js.map