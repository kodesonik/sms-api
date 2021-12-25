"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_router_adapter_1 = (0, tslib_1.__importDefault)(require("../../adapters/express-router-adapter"));
const payement_1 = require("../../composers/payement");
const auth_check_1 = (0, tslib_1.__importDefault)(require("../../middlewares/auth-check"));
exports.default = router => {
    router.get('/payement', auth_check_1.default, express_router_adapter_1.default.adapt(payement_1.GetPayementsComposer.compose()));
    router.get('/confirm-payement', express_router_adapter_1.default.adapt(payement_1.GetConfirmPayementComposer.compose()));
    router.post('/payement', auth_check_1.default, express_router_adapter_1.default.adapt(payement_1.PostPayementComposer.compose()));
};
//# sourceMappingURL=payement.js.map