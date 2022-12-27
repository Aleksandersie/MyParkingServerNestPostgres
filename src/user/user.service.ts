import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

const secret = 'qwer';
@Injectable()
export class UserService {
  check(dto: UserDto) {
    if (dto.login === secret) {
      return true;
    }
  }
}
