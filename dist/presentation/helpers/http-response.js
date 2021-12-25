"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../errors");
class HttpResponse {
    static ok(body) {
        return {
            statusCode: 200,
            body
        };
    }
    static badRequest(error) {
        return {
            statusCode: 400,
            body: error.message
        };
    }
    static unauthorizedError() {
        return {
            statusCode: 401,
            body: {
                error: new errors_1.UnauthorizedError().message
            }
        };
    }
    static serverError() {
        return {
            statusCode: 500,
            body: {
                error: new errors_1.ServerError().message
            }
        };
    }
}
exports.default = HttpResponse;
//# sourceMappingURL=http-response.js.map