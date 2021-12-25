import { InvalidParamError, MissingParamError } from "../errors"

export class DefaultHelper {
  /**
     *
     * @param initialDate start date
     * @returns difference between initial date
     * and now in hours
     */
  static untilDate (initialDate: Date) {
    if (!initialDate) throw new MissingParamError('initialDate')
    if (typeof initialDate.getTime !=  'function') throw new InvalidParamError('initialDate')
    const initialTmstp = initialDate.getTime()
    const today = new Date().getTime()
    return ((today - initialTmstp) % (60 * 60 * 1000))
  }
}
