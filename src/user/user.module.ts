import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserDto } from './dto/user.dto';

@Module({
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
