import request from 'supertest'
import DbConnectionHelper from '../../../infra/db/db-connection-helper'
import app from '../../config/app'
describe('Login Routes', () => {
  beforeAll(async () => {
    //    connect database
   await DbConnectionHelper.connect()
  })

  beforeEach(async () => {
    // reset databse
  })

  afterAll(async () => {
    // disconnect database
    await DbConnectionHelper.disconnect()
  })

  test('Should return message when valid credentials are provided', async () => {
    await request(app)
      .get('/api/user').expect(200)
  })

  test('Should return 404 when invalid credentials are provided', async () => {
    await request(app)
      .get('/api/invalid')
      .expect(404)
  })
})
