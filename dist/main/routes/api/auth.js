"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_router_adapter_1 = (0, tslib_1.__importDefault)(require("../../adapters/express-router-adapter"));
const auth_check_1 = (0, tslib_1.__importDefault)(require("../../middlewares/auth-check"));
const auth_1 = require("../../composers/auth");
exports.default = router => {
    router.post('/login', express_router_adapter_1.default.adapt(auth_1.LoginComposer.compose()));
    router.post('/logout', auth_check_1.default, express_router_adapter_1.default.adapt(auth_1.LogoutComposer.compose()));
    router.post('/register', express_router_adapter_1.default.adapt(auth_1.RegisterComposer.compose()));
    router.get('/validation/:token', express_router_adapter_1.default.adapt(auth_1.ValidationComposer.compose(), 'html'));
    router.get('/profile', auth_check_1.default, express_router_adapter_1.default.adapt(auth_1.ProfileComposer.compose()));
};
//# sourceMappingURL=auth.js.map