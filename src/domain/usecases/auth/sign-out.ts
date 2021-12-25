import { ServerError } from "../../../presentation/errors";
import { IHttpRequest } from "../../../utils/conventions";
import Cache from "../../../utils/helpers/cache"


export default class SignOut {
    constructor(private cache: Cache) {
        
    }

    async execute(httpRequest: IHttpRequest)  {
        const token = httpRequest.params.token
        const id = httpRequest.params.ref?.id
        if (!token) return new ServerError()
        await this.cache.set(id, null)
        return { message: 'logout successfully'}
    }

}