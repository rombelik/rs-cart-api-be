import { Injectable } from '@nestjs/common';

import { v4 } from 'uuid';

import { User } from '../../database/entities/entity.user';

@Injectable()
export class UserService {
  private readonly users: Record<string, User>;

  async findOne(userId: string): Promise<any>{
    try {
      const user = await User.findOne({
        where: {
          id: userId
        }
      });
      return user;
    } catch (e) {
      return {error: e.message}
    }

  }

  // async createOne({ name, password }: User): User {
  //   const id = v4(v4());
  //   const newUser = await this.userRepository.save({id: v4(), ...createUserDto});

  //   return newUser;
  // }

  createOne() {

    return {};
  }

}
