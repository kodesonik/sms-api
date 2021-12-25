import { PrismaClient } from "@prisma/client"

export default class Query <T> {
    collection
    constructor(collectionName) {
        const prisma = new PrismaClient()
        this.collection = prisma[collectionName];
    }

    async findMany(startAt = 0, limit = 100, select?, where?): Promise<T[]> {
        return await this.collection.findMany({
            take: limit,
            skip: startAt,
            select,
            where
        })
    }

    async findFirst(ref, select?): Promise<T> {
        return await this.collection.findFirst({ where: ref, select })
    }

    async insertOne(data: T) {
        return await this.collection.create({ data })
    }

    async updateOne(ref, data) {
        return await this.collection.update({ where: ref, data})
    }

    async deleteOne(ref) {
        return await this.collection.delete({ where: ref})
    }

    async softDeleteOne(ref) {
        return await this.collection.update({ where: ref, data: { deletedAt: new Date()}})
    }
}