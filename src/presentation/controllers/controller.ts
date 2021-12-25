import { IController, IHttpRequest, IHttpResponse } from "../../utils/conventions/";
import { MissingParamError } from "../../utils/errors";
import HttpResponse from "../helpers/http-response";

export default class Controller <T extends { execute }> implements IController {
    constructor (protected readonly usecase: T  ) {
    }
    async route(httpRequest: IHttpRequest): Promise<IHttpResponse> {
        try {
            if (!httpRequest) {
                return HttpResponse.badRequest(new MissingParamError('httpRequest'))
            }
            return HttpResponse.ok(await this.usecase.execute(httpRequest))
        } catch(err) {
            console.log(err.message)
            return HttpResponse.badRequest(err)
        }   
    }
}
