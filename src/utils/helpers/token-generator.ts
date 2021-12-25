import { MissingParamError } from "../errors"
import jwt  from 'jsonwebtoken'

export default class TokenGenerator {
  constructor (private secret) {}

  async generate (id) {
    if (!this.secret) {
      throw new MissingParamError('secret')
    }
    if (!id) {
      throw new MissingParamError('id')
    }
    return jwt.sign(id, this.secret)
  }

  async verify(token) {
      return await jwt.verify(token, this.secret)
  }
}
