import { promisify } from "util"
import redis from "redis"

export default class Cache {
    client
   constructor() {
     this.client = redis.createClient()
    this.client.on("error", function(error) {
        console.error(error);
      })    
   }


  async set (key, value) {
    await this.client.set(key, value)
  }

  async arrayPush (key, value) {
    //   add expire delay
     await this.client.lpush(key, value)
  }

  get (key) {
    const getAsync = promisify(this.client.get).bind(this.client);
    return getAsync(key)
    //  return await this.client.get(key)
  }

  async find(key, val): Promise<boolean> {
    const res = await this.get(key)
    console.log('result', res)
    return res === val
  }

//   findInArray (key, value, callback) {
//     this.client.lpos(key, value, (err, result) => callback(result))
//   }

   findInArray (key, value) {
    const getAsync = promisify(this.client.lpos).bind(this.client);
    return getAsync(key, value)
  }

  async removetAt (array, value) {
    this.client.lrem(array, 1, value)
  }

  
}