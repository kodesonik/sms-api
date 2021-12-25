import { IHttpRequest } from "../../../infra/models/http-request"
import { IHttpResponse } from "../../../infra/models/http-response"
import { ServerError } from "../../errors"
import GetUsers from './get-users'

class GetAllUsersUsecaseSpy {
    async execute(httpRequest: IHttpRequest){
        return <IHttpResponse>{}
    }
}
  

const makeSut = () => {
    const usecaseSpy = new GetAllUsersUsecaseSpy()
    return new GetUsers(usecaseSpy)
}

describe('Default Router', () => {
    test('Should trow  if no dependency is provided', async () => {
        const sut = new GetUsers()
        const httpRequest = <IHttpRequest>{}
        const httpResponse = await sut.route(httpRequest)
        expect(httpResponse.statusCode).toBe(500)
        expect(httpResponse.body.error).toEqual(new ServerError().message) 
    })

    test('Should return 200 if valid credentials are provided', async () => {
     
        const sut = makeSut()
        const httpRequest = <IHttpRequest>{}
        const httpResponse = await sut.route(httpRequest)
        expect(httpResponse.statusCode).toBe(200)
    })
}) 