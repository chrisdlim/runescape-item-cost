import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class RsItemsService {
  constructor(private readonly http: HttpService) {}
  private readonly baseUrl = 'https://services.runescape.com';

  // just a test service call
  getTradeableSummoningFamiliarsByCategory(categoryId: number) {
    return this.http.get(`${this.baseUrl}/m=itemdb_rs/api/catalogue/category.json?category=${categoryId}`);
  }
}
