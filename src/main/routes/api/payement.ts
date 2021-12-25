import ExpressRouterAdapter from "../../adapters/express-router-adapter"
import { GetConfirmPayementComposer, GetPayementsComposer, PostPayementComposer } from "../../composers/payement"
import authCheck from "../../middlewares/auth-check"

export default router => {
    router.get('/payement', authCheck,  ExpressRouterAdapter.adapt(GetPayementsComposer.compose()))
    router.get('/confirm-payement', ExpressRouterAdapter.adapt(GetConfirmPayementComposer.compose()))
    router.post('/payement', authCheck,  ExpressRouterAdapter.adapt(PostPayementComposer.compose()))
}