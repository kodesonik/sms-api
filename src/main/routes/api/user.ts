import ExpressRouterAdapter from "../../adapters/express-router-adapter"
import authCheck from '../../middlewares/auth-check'
import adminCheck from "../../middlewares/admin-check"
import { 
  DeleteUserComposer,
  GetUserByIdComposer,
  GetUsersComposer,
  PatchUserComposer,
  PostUserComposer 
} from "../../composers/user"


export default router => {
    router.get('/user', authCheck, adminCheck,  ExpressRouterAdapter.adapt(GetUsersComposer.compose()))
    router.get('/user/:id', authCheck, adminCheck, ExpressRouterAdapter.adapt(GetUserByIdComposer.compose()))
    router.post('/user', authCheck, adminCheck, ExpressRouterAdapter.adapt(PostUserComposer.compose()))
    router.patch('/user', authCheck, adminCheck, ExpressRouterAdapter.adapt(PatchUserComposer.compose()))
    router.delete('/user', authCheck, adminCheck, ExpressRouterAdapter.adapt(DeleteUserComposer.compose()))
  }
  