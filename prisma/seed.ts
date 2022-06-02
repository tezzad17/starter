import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient();

const userData = Prisma.UserCreateInput[] = [
    {
        email:"email@gmail.com",
        name: "luis",
        posts:{
            create: {
                title: "",
                content: "",
                published: true
            }
        }
    }
]

async function main() {
    console.log('seeding...');

    for (const u of userData) {
        const user = await prisma.user.create({
            data: u
        });
    }

}

main().catch((e) => {
    console.error(e)
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
});