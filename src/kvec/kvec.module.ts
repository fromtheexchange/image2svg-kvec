import { Module } from '@nestjs/common';
import { KvecController } from './kvec.controller';
import { KvecService } from './kvec.service';

@Module({
  controllers: [KvecController],
  providers: [KvecService]
})
export class KvecModule {}
