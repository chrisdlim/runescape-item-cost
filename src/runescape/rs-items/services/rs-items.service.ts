import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from 'nestjs-config/dist/module/config.service';

@Injectable()
export class RsItemsService {
  constructor(
    private readonly http: HttpService,
    private readonly config: ConfigService,
    ) {}
  private readonly runescapeApiEndpoint = this.config.get('config.runescapeApiEndpoint');

  // just a test service call
  getTradeableSummoningFamiliarsByCategory(categoryId: number) {
    return this.http.get(`${this.runescapeApiEndpoint}/m=itemdb_rs/api/catalogue/category.json?category=${categoryId}`);
  }
}
