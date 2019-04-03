import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { User } from './interface/user.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
  async findAllUsers(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findUser(id: String): Promise<User> {
    return await this.userModel.findOne({ _id: id });
  }

  async createUser(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return await newUser.save();
  }

  async deleteUser(id: String): Promise<User> {
    return await this.userModel.findByIdAndRemove(id);
  }

  async updateUser(id: String, user: User): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, user, { new: true });
  }
}
