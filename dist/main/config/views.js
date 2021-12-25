"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = (0, tslib_1.__importDefault)(require("express"));
const views_1 = require("../routes/views");
const router = express_1.default.Router();
exports.default = app => {
    app.set('view engine', 'ejs');
    app.use(express_1.default.static(__dirname + '../../../../public'));
    app.use('/', router);
    views_1.routes.forEach(route => route(router));
};
//# sourceMappingURL=views.js.map