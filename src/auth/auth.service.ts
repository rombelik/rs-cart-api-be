import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../users/services/users.service';
import { User } from '../users/models';
import { contentSecurityPolicy } from 'helmet';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) {}

  validateUser(name: string, password: string): any {
    const user = this.usersService.findOne(name);

    if (user) {
      return user;
    }

    return undefined
  }

  login(user: User, type) {
    const LOGIN_MAP = {
      jwt: this.loginJWT,
      basic: this.loginBasic,
      default: this.loginJWT,
    }
    const login = LOGIN_MAP[ type ]

    return login ? login(user) : LOGIN_MAP.default(user);
  }

  loginJWT(user: User) {
    const payload = { username: user.name, sub: user.id };

    return {
      token_type: 'Bearer',
      access_token: this.jwtService.sign(payload),
    };
  }

  loginBasic(user: User) {
    // const payload = { username: user.name, sub: user.id };
    console.log(user);

    function encodeUserToken(user) {
      const { id, name, password } = user;
      const buf = Buffer.from([name, password].join(':'), 'utf8');

      return buf.toString('base64');
    }

    return {
      token_type: 'Basic',
      access_token: encodeUserToken(user),
    };
  }



}
