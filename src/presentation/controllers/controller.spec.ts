
import { IHttpRequest, IHttpResponse } from "../../utils/conventions"
import { MissingParamError } from "../../utils/errors"
import { ServerError } from "../errors"
import Controller from "./controller"


const makeUsecaseSpy = () => {
    class UsecaseSpy {
        httpRequest: IHttpRequest
        async execute(httpRequest: IHttpRequest){
            if (!httpRequest) {
                throw new ServerError()
            }
            this.httpRequest = httpRequest
            return <IHttpResponse>{}
        }
    }
    const usecaseSpy = new UsecaseSpy()
    return usecaseSpy
}

const makeUsecaseSpyWithError = () => {
    class UsecaseSpy {
        httpRequest: IHttpRequest
        async execute(httpRequest: IHttpRequest){
                throw new MissingParamError('httpRequest')
            }
    }
    const usecaseSpy = new UsecaseSpy()
    return usecaseSpy
}

const makeSut = () => {
    const usecaseSpy = makeUsecaseSpy()
    const sut = new Controller(usecaseSpy)
    return { usecaseSpy, sut}
}
describe('My Router', () => {

    test('Should throw if invalid dependency are provided', async () => {
        const sut = new Controller()
        const httpRequest = <IHttpRequest>{}
        const httpResponse = await sut.route(httpRequest)
        expect(httpResponse.statusCode).toBe(500)
        expect(httpResponse.body.error).toEqual(new ServerError().message) 
    })

    test('Should return 400 if no httpRequest is provided', async () => {
        const { sut } = makeSut()
        const httpResponse = await sut.route()
        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body.error).toEqual(new MissingParamError('httpRequest').message) 
    })
    
    test('Should throw if dependency throws', async () => {
        const usecaseSpy = makeUsecaseSpyWithError()
        const sut = new Controller(usecaseSpy)
        const httpRequest = <IHttpRequest>{}
        const httpResponse = await sut.route(httpRequest)
        expect(httpResponse.statusCode).toBe(500)
        expect(httpResponse.body.error).toEqual(new ServerError().message) 
    })

    test('Should call Usecase with correct param', async () => {
        const { sut, usecaseSpy } = makeSut()
        const httpRequest = <IHttpRequest>{}
        await sut.route(httpRequest)
        expect(usecaseSpy.httpRequest).toEqual(httpRequest)
    })
})