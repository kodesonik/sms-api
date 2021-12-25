import { ListMessages } from "../../../domain/usecases/message"
import { MessageDb } from "../../../infra/data"
import { GetMessages } from "../../../presentation/controllers/message"

export default class GetMessagesComposer {
    static compose () {
        const messageDb = new MessageDb()
        const usecase = new ListMessages(messageDb)
        return new GetMessages(usecase)
    }
  }