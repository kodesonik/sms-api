import { InvalidParamError, MissingParamError } from "../errors"
import { DefaultHelper } from "./default-helper"
const sut = DefaultHelper

describe('Default Helper', () => {
    test('Should throw if no initialDate are provided', () => {
        const val = () => { sut.untilDate() }
        expect(val).toThrow(new MissingParamError('initialDate'))
    })

    test('Should throw if invalid date are proovided',  () => {
        const val = () => { sut.untilDate('invalidDate') }
        expect(val).toThrow(new InvalidParamError('initialDate'))
    })

    test('Should return valid data if valid credeantial are provided', () =>{
        const res = sut.untilDate(new Date(2000, 1, 1))
        expect(res).toBeTruthy()
    })
})