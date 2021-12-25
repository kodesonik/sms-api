"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const message_1 = require("../../../domain/usecases/message");
const data_1 = require("../../../infra/data");
const message_2 = require("../../../presentation/controllers/message");
const sms_server_1 = (0, tslib_1.__importDefault)(require("../../../utils/helpers/sms-server"));
class PostMessageComposer {
    static compose() {
        const messageDb = new data_1.MessageDb();
        const userDb = new data_1.UserDb;
        const smsServer = new sms_server_1.default(process.env.SMS_SERVER_HOST, process.env.SMS_SERVER_KEY, process.env.SMS_SERVER_SECRET);
        const usecase = new message_1.AddMessage(messageDb, userDb, smsServer);
        return new message_2.PostMessage(usecase);
    }
}
exports.default = PostMessageComposer;
//# sourceMappingURL=post-composer.js.map