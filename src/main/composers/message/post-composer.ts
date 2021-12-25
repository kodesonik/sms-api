import { AddMessage } from "../../../domain/usecases/message"
import { MessageDb, UserDb } from "../../../infra/data"
import { PostMessage } from "../../../presentation/controllers/message"
import SmsServer from "../../../utils/helpers/sms-server"

export default class PostMessageComposer {
    static compose () {
        const messageDb = new MessageDb()
        const userDb = new UserDb
        const smsServer = new SmsServer(process.env.SMS_SERVER_HOST, process.env.SMS_SERVER_KEY, process.env.SMS_SERVER_SECRET)
        const usecase = new AddMessage(messageDb, userDb, smsServer)
        return new PostMessage(usecase)
    }
  }