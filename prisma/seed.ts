import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
    await prisma.user.create({
        data: {
            email: 'hrvoje.bernardic@gmail.com',
        },
    });
}

seed();

// needed to be considered a module
export {};
