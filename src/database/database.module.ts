
import { Module } from '@nestjs/common';
import { TypeOrmCoreModule } from '@nestjs/typeorm/dist/typeorm-core.module';
import { Cart } from './entities/entity.cart';
import { User } from './entities/entity.user';
import { Order } from './entities/entity.order';
import { CartItem } from './entities/entity.cart_item';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmCoreModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(<string>process.env.DATABASE_PORT, 10),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      synchronize: false,

      // baseUrl: "./",
      logging: true,
      migrationsRun: true,
      entities: [Cart, User, CartItem, Order],
      // migrations: ['src/database/migration/**/*.ts'],
      // subscribers: ['src/subscriber/**/*.ts'],
      // seeds: [
      //   'src/database/seeds/*.ts'
      // ],
      // factories: [
      //   'src/factories/**/*{.ts,.js}'
      // ],
      cli: {
        // entitiesDir: 'src/entity',
        // migrationsDir: 'src/database/migration',
        // subscribersDir: 'src/subscriber',
      },
    }),
  ],
})
export class DatabaseModule {}
