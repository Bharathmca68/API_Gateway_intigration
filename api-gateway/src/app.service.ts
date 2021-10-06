import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getVersion() {
    return {
      title: 'Api-Gateway',
    }
  }
}