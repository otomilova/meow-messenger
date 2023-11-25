import { PrismaClient } from "@prisma/client";

declare global {
    let prisma: PrismaClient | undefined;
}

// @ts-ignore
const client = global.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') { // @ts-ignore
    global.prisma = client;
}

export default client;