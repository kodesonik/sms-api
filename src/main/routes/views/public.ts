import ExpressRenderAdapter from "../../adapters/express-render-adapter"

export default router => {
    router.get('/',ExpressRenderAdapter.render('index') )
    router.get('/pricing' )
    router.get('/login'  )
    router.get('/sign-up'    )
    router.get('/confirm-account'  )
  }