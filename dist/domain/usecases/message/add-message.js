"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const repositories_1 = require("../../../infra/repositories");
const errors_1 = require("../../../presentation/errors");
const errors_2 = require("../../../utils/errors");
class AddMessage {
    constructor(messageDb, userDb, smsServer) {
        this.messageDb = messageDb;
        this.userDb = userDb;
        this.smsServer = smsServer;
    }
    execute(httpRequest) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            if (!(this.messageDb && this.messageDb.insertOne))
                throw new errors_1.ServerError();
            if (!httpRequest && !httpRequest.body && !httpRequest.params && !httpRequest.params.ref)
                throw new errors_2.MissingParamError('httpRequest');
            const userRef = { id: httpRequest.params.ref.id };
            const { counter } = yield this.userDb.findFirst(userRef, { counter: true });
            if (counter < 1)
                throw new Error('package sold out');
            httpRequest.body.userId = userRef.id;
            const message = new repositories_1.MakeMessage(httpRequest.body);
            const { id, senderName, receiverContact, content } = yield this.messageDb.insertOne(message.data);
            const { data } = yield this.smsServer.send(senderName, receiverContact, content);
            yield this.userDb.updateOne(userRef, { counter: { decrement: 1 } });
            let status = "failed";
            if (data.status === "0")
                status = "sended";
            yield this.messageDb.updateOne({ id }, { status });
            return { message: status };
        });
    }
}
exports.default = AddMessage;
//# sourceMappingURL=add-message.js.map