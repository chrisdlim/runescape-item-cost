import { HttpModule, Module } from '@nestjs/common';
import { RsItemsController } from '../controllers/rs-items.controller';
import { RsItemsService } from '../services/rs-items.service';

@Module({
  imports: [    
    HttpModule
  ],
  providers: [RsItemsService],
  controllers: [RsItemsController],
})
export class RsItemsModule {}
