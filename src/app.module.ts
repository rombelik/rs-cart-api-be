import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { configService } from './config/config.service';
import { CartModule } from './cart/cart.module';
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './order/order.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    AuthModule,
    CartModule,
    OrderModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    DatabaseModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [],
})
export class AppModule {}
