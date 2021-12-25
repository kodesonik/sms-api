"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_render_adapter_1 = (0, tslib_1.__importDefault)(require("../../adapters/express-render-adapter"));
exports.default = router => {
    router.get('/', express_render_adapter_1.default.render('index'));
    router.get('/pricing');
    router.get('/login');
    router.get('/sign-up');
    router.get('/confirm-account');
};
//# sourceMappingURL=public.js.map