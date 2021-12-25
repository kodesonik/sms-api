import { IHttpRequest } from "../../../utils/conventions";
import ListUsers from "./list-users";


class GetAllUsersRepositorySpy {
    constructor() {

    }

    async get() {
       return {}
    }
}



const makeSut = () => {
    const repository = new GetAllUsersRepositorySpy()
    const sut = new ListUsers(repository)
    return { sut, repository }
}

describe('Get All Users Usecase',() => {
    test('Should return 500 if passed invalid dependency', async () => {
        const suts: ListUsers[] = [].concat(
            new ListUsers(),
            new ListUsers({})
            )
            for (const sut of suts) {
                const httpRequest = <IHttpRequest>{}
                const promise = sut.execute(httpRequest)
                expect(promise).rejects.toThrow()
              }

    })

    test('Should return message if correct credentials are provided', async () => {
        const { sut } = makeSut()
        const res = await sut.execute()
        expect(res).toBeTruthy()
    })
})
