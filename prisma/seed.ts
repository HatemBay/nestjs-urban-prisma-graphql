import { PrismaClient, Role } from '@prisma/client';
import { Logger } from '@nestjs/common';

const prisma = new PrismaClient();

async function main() {
  const admin: Role = Role.ADMIN;
  await prisma.user.deleteMany();
  const username = 'user1';
  const user1 = await prisma.user.create({
    data: {
      username,
      email: `${username}@gmail.com`,
      password: username,
      role: admin,
    },
  });

  Logger.log(`${user1.username} created`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
