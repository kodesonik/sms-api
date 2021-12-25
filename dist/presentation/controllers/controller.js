"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const errors_1 = require("../../utils/errors");
const http_response_1 = (0, tslib_1.__importDefault)(require("../helpers/http-response"));
class Controller {
    constructor(usecase) {
        this.usecase = usecase;
    }
    route(httpRequest) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            try {
                if (!httpRequest) {
                    return http_response_1.default.badRequest(new errors_1.MissingParamError('httpRequest'));
                }
                return http_response_1.default.ok(yield this.usecase.execute(httpRequest));
            }
            catch (err) {
                console.log(err.message);
                return http_response_1.default.badRequest(err);
            }
        });
    }
}
exports.default = Controller;
//# sourceMappingURL=controller.js.map