"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const message_1 = require("../../../domain/usecases/message");
const data_1 = require("../../../infra/data");
const message_2 = require("../../../presentation/controllers/message");
class GetMessagesComposer {
    static compose() {
        const messageDb = new data_1.MessageDb();
        const usecase = new message_1.ListMessages(messageDb);
        return new message_2.GetMessages(usecase);
    }
}
exports.default = GetMessagesComposer;
//# sourceMappingURL=get-composer.js.map