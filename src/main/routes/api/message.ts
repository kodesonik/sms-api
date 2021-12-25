import ExpressRouterAdapter from "../../adapters/express-router-adapter"
import { GetConfirmMessageComposer, GetMessagesComposer, PostMessageComposer } from "../../composers/message"
import apiKeyCheck from "../../middlewares/api-key-check"
import authCheck from "../../middlewares/auth-check"

export default router => {
    router.get('/message', authCheck,  ExpressRouterAdapter.adapt(GetMessagesComposer.compose()))
    router.get('/message/:token', apiKeyCheck,  ExpressRouterAdapter.adapt(PostMessageComposer.compose()))
    router.get('/confirm-message', ExpressRouterAdapter.adapt(GetConfirmMessageComposer.compose()))
    router.post('/message', authCheck,  ExpressRouterAdapter.adapt(PostMessageComposer.compose()))
}