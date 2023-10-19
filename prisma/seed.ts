import { PrismaClient, Role } from '@prisma/client';
import { Logger } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const admin: Role = Role.ADMIN;
  await prisma.user.deleteMany();
  const username = 'user1';
  const password = await bcrypt.hash(username, 10);
  const user1 = await prisma.user.create({
    data: {
      username,
      email: `${username}@gmail.com`,
      password,
      role: admin,
    },
  });

  Logger.log(`${user1.username} created`);
  // populateEmailVerified();

  // Logger.log(`populating success`);
}

// async function populateEmailVerified() {
//   const users = await prisma.user.findMany();

//   users.forEach((user) => {
//     if (user.email_verified === null) {
//       user.email_verified = false;
//     }
//   });
//   await prisma.user.updateMany({ data: users });
// }

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
