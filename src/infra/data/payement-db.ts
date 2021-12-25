import { Payement } from "@prisma/client";
import Query from "./query";

export default class PayementDb extends Query<Payement> {
    constructor() {
        super('payement')
    }
}