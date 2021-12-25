import validator from 'validator'
import EmailValidator from './email-validator'
import  { MissingParamError } from '../errors'

const makeSut = () => {
  const sut = new EmailValidator()
  return sut
}

describe('Email Validator', () => {
  test('Should return true if validator return true', () => {
    const sut = makeSut()
    const isEmail = sut.isValid('valid_email@mail.com')
    expect(isEmail).toBe(true)
  })

  test('Should return false if validator return false', () => {
    validator.isEmailValid = false
    const sut = makeSut()
    const isEmail = sut.isValid('invalid_email@mail.com')
    expect(isEmail).toBe(false)
  })

  test('Should call validator with the correct email', () => {
    const sut = makeSut()
    sut.isValid('any_email@mail.com')
    expect(validator.email).toEqual('any_email@mail.com')
  })

  test('Should throw if no email is provided', async () => {
    const sut = makeSut()
    const val = () => { sut.isValid() }
    expect(val).toThrow(new MissingParamError('email'))
  })
})
