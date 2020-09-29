import { Controller, Get, Param, Post } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { RsItemsService } from '../services/rs-items.service';

@Controller('rs_items')
export class RsItemsController {
  constructor(
    private readonly rsItemService: RsItemsService,
    ) {}

  @Get()
  async test() {
    return {
      status: 200,
    }
  }  

  @Post('tradeable_familiars/:categoryId')
  async getTradeableSummoningFamiliars(@Param('categoryId') categoryId: number) {
    return await this.rsItemService.getTradeableSummoningFamiliarsByCategory(categoryId).pipe(map(response => response.data)).toPromise();
  }

}
