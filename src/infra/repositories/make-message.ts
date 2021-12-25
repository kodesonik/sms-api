import { Message } from "@prisma/client";
import { ServerError } from "../../presentation/errors";
import { MissingParamError } from "../../utils/errors";

export default class MakeMessage{
    private _ref: { id : string| number}
    private _data

    constructor(message: Message) {
        const { id, ...infos} = message
        this._data = infos

        if (id) {
            this._ref = { id }
            this.update()
        } else {
            if (!this.data) throw new ServerError()
            if (!this.data.senderName) throw new MissingParamError('sender name')
            if (!this.data.receiverContact) throw new MissingParamError('receiver contact')
            if (!this.data.content) throw new MissingParamError('content')
            if (!this.data.createdAt) this.create()
            if (!this.data.status) this.setStatus()
            this.formatContact()
        }

    }
    get ref() {
        return this._ref
    }

    get data() {
        return this._data
    }

    private create() {
        this._data.createdAt = new Date()
    }

    private update() {
       this._data.updatedAt = new Date()
    }

    private setStatus() {
        this._data.status = 'pending'
    } 

    private formatContact() {
        const contact: string = this._data.receiverContact.replace(/ +/g, "")
        if (contact.substring(0, 2) == '00') this._data.receiverContact = contact
        else if (contact.charAt(0) ===  '+') this._data.receiverContact = contact.replace(/\+/g , "00")
        else throw new MissingParamError('indicatif')

    }


}