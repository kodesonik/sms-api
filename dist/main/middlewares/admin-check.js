"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const http_response_1 = (0, tslib_1.__importDefault)(require("../../presentation/helpers/http-response"));
exports.default = (req, res, next) => {
    const ref = req.params.ref;
    if (!ref) {
        const httpResponse = http_response_1.default.serverError();
        res.status(httpResponse.statusCode).send(httpResponse.body);
    }
    else if (ref.role !== 'admin') {
        const httpResponse = http_response_1.default.unauthorizedError();
        res.status(httpResponse.statusCode).send(httpResponse.body);
    }
    else
        next();
};
//# sourceMappingURL=admin-check.js.map