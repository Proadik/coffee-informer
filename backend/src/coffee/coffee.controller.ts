import { Controller, Get } from '@nestjs/common';
import { CoffeeService } from './coffee.service';

@Controller('coffee')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}

  @Get('latest')
  async getLatestCoffee() {
    return this.coffeeService.get('latest');
  }

  @Get('new')
  async getNewCoffee() {
    return this.coffeeService.get('new');
  }
}
