import { Message } from "@prisma/client";
import Query from "./query";

export default class MessageDb extends Query<Message> {
    constructor() {
        super('message')
    }
}