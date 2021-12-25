import { InvalidParamError, MissingParamError } from "../../utils/errors"
import TokenGenerator from "../../utils/helpers/token-generator"

export default async (req, res, next) => {
    const token = req.params.token
    if (!token) throw new MissingParamError('Api key')
    const tokenGenerator = new TokenGenerator(process.env.ACCESS_TOKEN_SECRET)
    const ref = await tokenGenerator.verify(token)
    if (!ref) throw new InvalidParamError('Api key')     
    req.params.ref = ref
    req.params.token = token
    req.body.content = req.params.text
    req.body.receiverContact = req.params.to
    req.body.senderName = req.params.from
    next()
}
  