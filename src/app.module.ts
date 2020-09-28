import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RunescapeModule } from './runescape/runescape.module';

@Module({
  imports: [
    RunescapeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
