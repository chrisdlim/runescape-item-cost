import { HttpModule, Module } from '@nestjs/common';
import { RsItemsModule } from './rs-items/modules/rs-items.module';

@Module({
  imports: [
    RsItemsModule,
  ],
  controllers: [],
  providers: [],
})
export class RunescapeModule {}
