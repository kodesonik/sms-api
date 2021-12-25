import crypto from 'crypto'

export default length => crypto.randomBytes(length).toString('hex')
