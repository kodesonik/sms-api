import { EditMessage } from "../../../domain/usecases/message"
import { MessageDb } from "../../../infra/data"
import { GetConfirmMessage } from "../../../presentation/controllers/message"

export default class GetConfirmMessageComposer {
    static compose () {
        const messageDb = new MessageDb()
        const usecase = new EditMessage(messageDb)
        return new GetConfirmMessage(usecase)
    }
  }