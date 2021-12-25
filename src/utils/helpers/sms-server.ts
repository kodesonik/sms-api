import axios from 'axios'

export default class SmsServer {
    constructor(private host: string, private api_key: string, private secret: string) {}

    async send(senderName, receiverContact, message) {
      return await axios.get(`${this.host}?key=${this.api_key}&secret=${this.secret}&from=${senderName}&to=${receiverContact}&text=${message}`)
    }
}