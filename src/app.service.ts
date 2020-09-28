import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    const payload = {
      name: 'Arif'
    };
    return payload;
  }
}
