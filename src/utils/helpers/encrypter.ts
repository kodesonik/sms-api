import { MissingParamError } from "../errors"
import bcrypt from 'bcrypt'

export default class Encrypter {
  async compare (value, hash) {
    if (!value) {
      throw new MissingParamError('value')
    }
    if (!hash) {
      throw new MissingParamError('hash')
    }
    const isValid = await bcrypt.compare(value, hash)
    return isValid
  }

  async hash(value) {
    return await bcrypt.hash(value, 2)
  }
}
