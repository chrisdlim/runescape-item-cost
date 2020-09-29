import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule } from 'nestjs-config/dist/module/config.module';
import * as path from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { RunescapeModule } from './runescape/runescape.module';

@Module({
  imports: [
    RunescapeModule,
    ConfigModule.load(path.resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),

  ],
  controllers: [AppController],
  providers: [
    AppService,
   {
     provide: APP_INTERCEPTOR,
     useClass: LoggingInterceptor
   }
  ],
})
export class AppModule {}
