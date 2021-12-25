import { InvalidParamError, MissingParamError } from "../../utils/errors"
import EmailValidator from "../../utils/helpers/email-validator";

export default class MakeLogin {
    private _email: string
    private _password: string

    constructor(data, emailValidator: EmailValidator) {
        this._email = data.email;
        this._password = data.password;

        if (!this.email) throw new MissingParamError('email')

        if (!emailValidator.isValid(this.email)) throw new InvalidParamError('email')

        if (!this.password) throw new MissingParamError('password')
        
        if (this.password.length < 8) throw new InvalidParamError('password')

    }

    get email() {
        return this._email
    }

    get password() {
        return this._password
    }


}