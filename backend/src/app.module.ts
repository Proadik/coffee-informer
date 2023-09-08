import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { CoffeeModule } from './coffee/coffee.module';

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
    }),
    CoffeeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
