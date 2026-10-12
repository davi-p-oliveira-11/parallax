import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client/extension';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
   async onModuleInit() {
      await this.$connect();
   }
   async shutDown(app: INestApplication) {
      this.$on('beforexit' as never, async()=> {
          await app.close();  
      })
   }
}
