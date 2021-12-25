import { MessageDb, UserDb } from "../../../infra/data"
import { MakeMessage } from "../../../infra/repositories"
import { ServerError } from "../../../presentation/errors"
import { IUsecase, IHttpRequest } from "../../../utils/conventions"
import { MissingParamError } from "../../../utils/errors"
import SmsServer from "../../../utils/helpers/sms-server"

export default class AddMessage implements IUsecase {
    constructor(private messageDb: MessageDb, private userDb: UserDb, private smsServer: SmsServer) {}

    async execute(httpRequest: IHttpRequest) {
        if (!(this.messageDb && this.messageDb.insertOne)) throw new ServerError()
        if (!httpRequest && !httpRequest.body && !httpRequest.params && !httpRequest.params.ref) throw new MissingParamError('httpRequest')
        const userRef = { id:  httpRequest.params.ref.id}
        
        const { counter } = await this.userDb.findFirst(userRef, { counter: true})
        if (counter<1) throw new Error('package sold out')
       
        httpRequest.body.userId = userRef.id
        const message = new MakeMessage(httpRequest.body)
        const { id, senderName, receiverContact, content} = await this.messageDb.insertOne(message.data)
       
        const { data } = await this.smsServer.send(senderName, receiverContact, content)
        await this.userDb.updateOne(userRef, { counter: {decrement: 1}})
       
        let status = "failed"
        if (data.status === "0") status="sended"
        await this.messageDb.updateOne({id}, { status})
        return {message: status}
    }
}