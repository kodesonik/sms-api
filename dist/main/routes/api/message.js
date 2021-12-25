"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_router_adapter_1 = (0, tslib_1.__importDefault)(require("../../adapters/express-router-adapter"));
const message_1 = require("../../composers/message");
const api_key_check_1 = (0, tslib_1.__importDefault)(require("../../middlewares/api-key-check"));
const auth_check_1 = (0, tslib_1.__importDefault)(require("../../middlewares/auth-check"));
exports.default = router => {
    router.get('/message', auth_check_1.default, express_router_adapter_1.default.adapt(message_1.GetMessagesComposer.compose()));
    router.get('/message/:token', api_key_check_1.default, express_router_adapter_1.default.adapt(message_1.PostMessageComposer.compose()));
    router.get('/confirm-message', express_router_adapter_1.default.adapt(message_1.GetConfirmMessageComposer.compose()));
    router.post('/message', auth_check_1.default, express_router_adapter_1.default.adapt(message_1.PostMessageComposer.compose()));
};
//# sourceMappingURL=message.js.map