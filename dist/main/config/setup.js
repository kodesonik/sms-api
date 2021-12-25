"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const cors_1 = (0, tslib_1.__importDefault)(require("../middlewares/cors"));
const json_parser_1 = (0, tslib_1.__importDefault)(require("../middlewares/json-parser"));
const content_type_1 = (0, tslib_1.__importDefault)(require("../middlewares/content-type"));
exports.default = app => {
    app.disable('x-powered-by');
    app.use(cors_1.default);
    app.use(json_parser_1.default);
    app.use(content_type_1.default);
};
//# sourceMappingURL=setup.js.map