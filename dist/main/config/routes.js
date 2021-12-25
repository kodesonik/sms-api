"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = (0, tslib_1.__importDefault)(require("express"));
const api_1 = require("../routes/api");
const router = express_1.default.Router();
exports.default = app => {
    app.use('/api', router);
    api_1.routes.forEach(route => route(router));
};
//# sourceMappingURL=routes.js.map