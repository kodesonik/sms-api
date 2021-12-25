import ExpressRouterAdapter from "../../adapters/express-router-adapter"
import authCheck from "../../middlewares/auth-check"
import { 
    LoginComposer,
    LogoutComposer,
    ProfileComposer,
    RegisterComposer,
    ValidationComposer 
} from "../../composers/auth"

export default router => {
    router.post('/login', ExpressRouterAdapter.adapt(LoginComposer.compose()))
    router.post('/logout',authCheck,ExpressRouterAdapter.adapt(LogoutComposer.compose()))
    router.post('/register', ExpressRouterAdapter.adapt(RegisterComposer.compose()))
    router.get('/validation/:token', ExpressRouterAdapter.adapt(ValidationComposer.compose(), 'html'))
    router.get('/profile', authCheck, ExpressRouterAdapter.adapt(ProfileComposer.compose()))
}