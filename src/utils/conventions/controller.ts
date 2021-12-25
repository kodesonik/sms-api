import { IHttpRequest, IHttpResponse } from ".";

export default interface IController {
    route(httpRequest?: IHttpRequest): Promise<IHttpResponse>
}