import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './interface/user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAllUsers();
  }

  @Get(':id')
  findUserById(@Param('id') id): Promise<User> {
    return this.userService.findUser(id);
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }

  @Delete(':id')
  deleteUser(@Param('id') id): string {
    return `Delete user`;
  }

  @Put(':id')
  updateUser(
    @Param('id') id,
    @Body() updateUserDto: CreateUserDto,
  ): Promise<User> {
    return this.userService.updateUser(id, updateUserDto);
  }
}
