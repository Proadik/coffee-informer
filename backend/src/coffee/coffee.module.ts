import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CoffeeController } from './coffee.controller';
import { CoffeeService } from './coffee.service';

@Module({
  imports: [HttpModule],
  controllers: [CoffeeController],
  providers: [CoffeeService],
  exports: [CoffeeService],
})
export class CoffeeModule {}
