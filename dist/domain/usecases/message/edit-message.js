"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const repositories_1 = require("../../../infra/repositories");
const errors_1 = require("../../../presentation/errors");
const errors_2 = require("../../../utils/errors");
class EditMessage {
    constructor(messageDb) {
        this.messageDb = messageDb;
    }
    execute(httpRequest) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            if (!(this.messageDb && this.messageDb.updateOne))
                throw new errors_1.ServerError();
            if (!httpRequest && !httpRequest.body)
                throw new errors_2.MissingParamError('httpRequest');
            const message = new repositories_1.MakeMessage(httpRequest.body);
            return yield this.messageDb.updateOne(message.ref, message.data);
        });
    }
}
exports.default = EditMessage;
//# sourceMappingURL=edit-message.js.map