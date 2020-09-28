import { Controller, Param, Post } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { RsItemsService } from '../services/rs-items.service';

@Controller('rs-items')
export class RsItemsController {
  constructor(private readonly rsItemService: RsItemsService) {}

  @Post('tradeable-familiars/:categoryId')
  async getTradeableSummoningFamiliars(@Param('categoryId') categoryId: number) {
    return await this.rsItemService.getTradeableSummoningFamiliarsByCategory(categoryId).pipe(map(response => response.data)).toPromise();
  }

}
