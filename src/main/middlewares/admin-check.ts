import HttpResponse from "../../presentation/helpers/http-response"

export default (req, res, next) => {
  const ref = req.params.ref
  if (!ref) {
      const httpResponse = HttpResponse.serverError()
      res.status(httpResponse.statusCode).send(httpResponse.body)
  } else if (ref.role !== 'admin') {
    const httpResponse = HttpResponse.unauthorizedError()
    res.status(httpResponse.statusCode).send(httpResponse.body)
  } else next()
}
  