import { HttpService } from '@nestjs/axios';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CoffeeImage, CoffeeInfo } from './coffee.interface';

@Injectable()
export class CoffeeService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly httpService: HttpService,
  ) {}

  private readonly logger = new Logger(CoffeeService.name);

  async fetchData() {
    const req: [CoffeeInfo, CoffeeImage] = await Promise.all([
      (
        await this.httpService.axiosRef.get<CoffeeInfo>(
          'https://random-data-api.com/api/coffee/random_coffee',
        )
      ).data,
      (
        await this.httpService.axiosRef.get<CoffeeImage>(
          'https://loremflickr.com/json/500/500/coffee,bean',
        )
      ).data,
    ]);

    const [info, image] = req;

    const coffee = {
      ...info,
      image: image.file,
    };

    this.logger.log(`${info.uid} coffee fetched and saved to cache`);
    await this.cacheManager.set(info.uid, coffee, 10000000); // 2+ hours;
    await this.cacheManager.set('latest', coffee, 10000000);
    return coffee;
  }

  async get(type: 'latest' | 'new') {
    if (type === 'latest') {
      this.logger.log('Fetching latest coffee');
      const lastCachedCoffeeData = await this.cacheManager.get('latest');

      if (lastCachedCoffeeData) {
        return lastCachedCoffeeData;
      }

      return this.fetchData();
    }

    return this.fetchData();
  }

  async getById(id: string) {
    if (!id) {
      return;
    }

    const cachedCoffee = await this.cacheManager.get(id);

    if (cachedCoffee) {
      return cachedCoffee;
    }

    return null;
  }
}
