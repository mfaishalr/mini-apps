import { PrismaClient } from "@prisma/client";

export default class UserController {

    constructor(props) {
        this.prisma = new PrismaClient()
        this.fields = props?.fields ?? null
        this.value = props?.value ?? null
        this.key = props?.key ?? undefined
    }

    async create() {
        try {
            if (!this.fields) return [ new Error('Fields is required'),null]
            const result = await this.prisma.user.create({
                data: this.fields
            })
            return [ null, result ]
        } catch (err) {
            return [ err, null ]
        }
    }

    async delete() {
        try {
            if (!this.key) return [ new Error('key is required'),null ]

            //create user and save to database
            const result = await this.prisma.user.delete({
                where: {
                    [this.key]:this.value
                }
            })
            return [ null,result ]
        } catch (err) {
            return [ err,null ]
        }
    }
}