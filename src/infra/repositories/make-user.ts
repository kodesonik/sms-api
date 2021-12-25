import { User } from "@prisma/client"
import { ServerError } from "../../presentation/errors"
import { MissingParamError } from "../../utils/errors"

export default class MakeUser {
    private _ref: { id : string| number}
    private _data
    constructor( user: User) {
        const { id, ...infos} = user
        this._data = infos
        if (id) {
            this._ref = { id }
            this.update()
        } else {
            if (!this.data) throw new ServerError()
            if (!this.data.email) throw new MissingParamError('email')
            if (!this.data.name) throw new MissingParamError('lastname')
            if (!this.data.password) throw new MissingParamError('password')
            if (!this.data.createdAt) this.create()
            if (!this.data.role) this.setRole()
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

     private setRole() {
         this._data.role = 'user'
     }
         
} 