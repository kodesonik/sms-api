import { Payement } from "@prisma/client";
import { ServerError } from "../../presentation/errors";
import { MissingParamError } from "../../utils/errors";

export default class MakePayement{
    private _ref: { id : string| number}
    private _data

    constructor(payement: Payement, oldPayement?: Payement) {
        const { id, ...infos} = payement
        this._data = infos

        if (id) {
            this._ref = { id }
                if (!oldPayement) throw new ServerError()
                if (payement.amount !== +oldPayement.amount) this._data.status = "invalid"
                else if (this._data.status == "0") this._data.status = 'success'
        } else {
            if (!this.data) throw new ServerError()
            if (!this.data.amount) throw new MissingParamError('amount')
            if (!this.data.provider) throw new MissingParamError('provider')
            if (!this.data.method) throw new MissingParamError('method')
            if (!this.data.createdAt) this.create()
            if (!this.data.status) this.setStatus()
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

    // private update() {
    //    this._data.updatedAt = new Date()
    // }

    private setStatus() {
        this._data.status = 'pending'
    }


}