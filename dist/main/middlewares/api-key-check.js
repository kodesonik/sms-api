"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const errors_1 = require("../../utils/errors");
const token_generator_1 = (0, tslib_1.__importDefault)(require("../../utils/helpers/token-generator"));
exports.default = (req, res, next) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    const token = req.params.token;
    if (!token)
        throw new errors_1.MissingParamError('Api key');
    const tokenGenerator = new token_generator_1.default(process.env.ACCESS_TOKEN_SECRET);
    const ref = yield tokenGenerator.verify(token);
    if (!ref)
        throw new errors_1.InvalidParamError('Api key');
    req.params.ref = ref;
    req.params.token = token;
    req.body.content = req.params.text;
    req.body.receiverContact = req.params.to;
    req.body.senderName = req.params.from;
    next();
});
//# sourceMappingURL=api-key-check.js.map