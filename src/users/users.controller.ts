import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { User } from '../database/entities/entity.user';
import { UserService } from './services/users.service';

@Controller('api/profiles')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) {}

  @Get(':id')
  async findOne(
    @Param('id') id: string
  ) {
    return this.userService.findOne(id);
  }

  // @Post()
  // async createOne(
  //   @Body() createUserDto: CreateUserDto
  // ) {
  //   return this.usersService.createOne(createUserDto);
  // }
}