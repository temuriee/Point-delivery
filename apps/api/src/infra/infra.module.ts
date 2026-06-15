import { Module } from '@nestjs/common';
import { PrismaModule } from './prsima/prisma.module';

@Module({
  imports: [PrismaModule],
})
export class InfraModule {}
