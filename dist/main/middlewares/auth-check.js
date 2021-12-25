"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const cache_1 = (0, tslib_1.__importDefault)(require("../../utils/helpers/cache"));
const token_generator_1 = (0, tslib_1.__importDefault)(require("../../utils/helpers/token-generator"));
exports.default = (req, res, next) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token)
        return res.status(403).json({ error: "Token not provided!" });
    const tokenGenerator = new token_generator_1.default(process.env.ACCESS_TOKEN_SECRET);
    const ref = yield tokenGenerator.verify(token);
    console.log('ref: ', ref);
    if (!ref)
        res.status(403).send({ message: 'Access denied' });
    else {
        const cache = new cache_1.default('token');
        const tokenExists = yield cache.find(ref.id, token);
        if (!tokenExists)
            res.status(503).json({ error: "Token expired." });
        else {
            req.params.ref = ref;
            req.params.token = token;
            next();
        }
    }
});
//# sourceMappingURL=auth-check.js.map