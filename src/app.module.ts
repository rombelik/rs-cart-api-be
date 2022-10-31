import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { CartController } from './cart/cart.controller'
import { UserController } from './users/users.controller'
import { configService } from './config/config.service';
import { CartModule } from './cart/cart.module';
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './order/order.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './database/database.module';
import { CartService } from './cart/services/cart.service'
import { UserService } from './users/services/users.service'

@Module({
  imports: [
    CartModule,
    OrderModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    DatabaseModule,
  ],
  controllers: [
    AppController,
    CartController,
    UserController
  ],
  providers: [CartService, UserService],
})
export class AppModule {}
