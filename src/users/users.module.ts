import { Module } from '@nestjs/common';

import { UserService } from './services';

@Module({
  providers: [ UserService ],
})
export class UsersModule {}
