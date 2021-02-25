import { Module } from '@nestjs/common';
import { KvecModule } from '../kvec/kvec.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [KvecModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
