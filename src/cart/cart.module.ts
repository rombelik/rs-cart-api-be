import { Module } from '@nestjs/common';


import { CartService } from './services';


@Module({
  providers: [ CartService ]
})
export class CartModule {}
