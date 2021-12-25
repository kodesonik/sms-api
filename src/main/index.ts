import DbConnectionHelper from '../infra/db/db-connection-helper'
import app from './config/app'
import env from './config/env'

try {
    DbConnectionHelper.connect().then(
         () => {      
            app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
        }
    )
} catch(err) {
    throw new Error(err.message)
} finally {
    DbConnectionHelper.disconnect()
}
