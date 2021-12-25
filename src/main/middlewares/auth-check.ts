import Cache from "../../utils/helpers/cache"
import TokenGenerator from "../../utils/helpers/token-generator"

export default async (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) return res.status(403).json({ error: "Token not provided!"})   
    const tokenGenerator = new TokenGenerator(process.env.ACCESS_TOKEN_SECRET)
    const ref = await tokenGenerator.verify(token)
    console.log('ref: ', ref)  
    if (!ref) res.status(403).send({ message: 'Access denied' })         
    else {
        const cache = new Cache()
        const tokenExists = await cache.find(ref.id, token)
        if (!tokenExists) res.status(503).json({ error: "Token expired."})
        else {  
            req.params.ref = ref
            req.params.token = token
            next()
        }
      
    }
    

}
  