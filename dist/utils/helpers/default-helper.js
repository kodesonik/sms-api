"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultHelper = void 0;
const errors_1 = require("../errors");
class DefaultHelper {
    static untilDate(initialDate) {
        if (!initialDate)
            throw new errors_1.MissingParamError('initialDate');
        if (typeof initialDate.getTime != 'function')
            throw new errors_1.InvalidParamError('initialDate');
        const initialTmstp = initialDate.getTime();
        const today = new Date().getTime();
        return ((today - initialTmstp) % (60 * 60 * 1000));
    }
}
exports.DefaultHelper = DefaultHelper;
//# sourceMappingURL=default-helper.js.map