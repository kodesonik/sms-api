import { Request, Response} from 'express'
import { IController, IHttpRequest, IHttpResponse } from '../../utils/conventions'


export default class ExpressRouterAdapter {
  static adapt (controller: IController, responseFormat?: string) {
    return async (req: Request, res: Response) => {
      const httpRequest: IHttpRequest = {
        body: req.body,
        params: req.params,
      }
      const httpResponse: IHttpResponse = await controller.route(httpRequest)
      if (responseFormat) {
        res.type(responseFormat)
        res.status(httpResponse.statusCode).send(httpResponse.body)
      } else {
        res.status(httpResponse.statusCode).json(httpResponse.body)
      }
    }
  }
}
