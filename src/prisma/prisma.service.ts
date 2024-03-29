import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
// import { PrismaClient } from '../@generated/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  // TODO: check if obsolete
  // async enableShutdownHooks(app: INestApplication) {
  //   this.$on('beforeExit' as never, async () => {
  //     await app.close();
  //   });
  // }
}
