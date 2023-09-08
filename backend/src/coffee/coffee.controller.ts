import { Controller, Get, Param } from '@nestjs/common';
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

  @Get(':id')
  async getCoffeeByUid(@Param('id') id: string) {
    return this.coffeeService.getById(id);
  }
}
