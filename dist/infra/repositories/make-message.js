"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const errors_1 = require("../../presentation/errors");
const errors_2 = require("../../utils/errors");
class MakeMessage {
    constructor(message) {
        const { id } = message, infos = (0, tslib_1.__rest)(message, ["id"]);
        this._data = infos;
        if (id) {
            this._ref = { id };
            this.update();
        }
        else {
            if (!this.data)
                throw new errors_1.ServerError();
            if (!this.data.senderName)
                throw new errors_2.MissingParamError('sender name');
            if (!this.data.receiverContact)
                throw new errors_2.MissingParamError('receiver contact');
            if (!this.data.content)
                throw new errors_2.MissingParamError('content');
            if (!this.data.createdAt)
                this.create();
            if (!this.data.status)
                this.setStatus();
            this.formatContact();
        }
    }
    get ref() {
        return this._ref;
    }
    get data() {
        return this._data;
    }
    create() {
        this._data.createdAt = new Date();
    }
    update() {
        this._data.updatedAt = new Date();
    }
    setStatus() {
        this._data.status = 'pending';
    }
    formatContact() {
        const contact = this._data.receiverContact.replace(/ +/g, "");
        if (contact.substring(0, 2) == '00')
            this._data.receiverContact = contact;
        else if (contact.charAt(0) === '+')
            this._data.receiverContact = contact.replace(/\+/g, "00");
        else
            throw new errors_2.MissingParamError('indicatif');
    }
}
exports.default = MakeMessage;
//# sourceMappingURL=make-message.js.map