"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
class ExpressRouterAdapter {
    static adapt(controller, responseFormat) {
        return (req, res) => (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const httpRequest = {
                body: req.body,
                params: req.params,
            };
            const httpResponse = yield controller.route(httpRequest);
            if (responseFormat) {
                res.type(responseFormat);
                res.status(httpResponse.statusCode).send(httpResponse.body);
            }
            else {
                res.status(httpResponse.statusCode).json(httpResponse.body);
            }
        });
    }
}
exports.default = ExpressRouterAdapter;
//# sourceMappingURL=express-router-adapter.js.map