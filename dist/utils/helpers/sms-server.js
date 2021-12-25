"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = (0, tslib_1.__importDefault)(require("axios"));
class SmsServer {
    constructor(host, api_key, secret) {
        this.host = host;
        this.api_key = api_key;
        this.secret = secret;
    }
    send(senderName, receiverContact, message) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return yield axios_1.default.get(`${this.host}?key=${this.api_key}&secret=${this.secret}&from=${senderName}&to=${receiverContact}&text=${message}`);
        });
    }
}
exports.default = SmsServer;
//# sourceMappingURL=sms-server.js.map