import { IHttpRequest } from ".";

export default interface IUsecase {
    execute(httpRequest: IHttpRequest): Promise<unknown>
}