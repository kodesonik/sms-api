"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const message_1 = require("../../../domain/usecases/message");
const data_1 = require("../../../infra/data");
const message_2 = require("../../../presentation/controllers/message");
class GetConfirmMessageComposer {
    static compose() {
        const messageDb = new data_1.MessageDb();
        const usecase = new message_1.EditMessage(messageDb);
        return new message_2.GetConfirmMessage(usecase);
    }
}
exports.default = GetConfirmMessageComposer;
//# sourceMappingURL=get-confirm.composer.js.map