import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model, Types } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(createUserDto: CreateUserDto) {
    const newUser = {
      ...createUserDto,
    };
    return this.userModel.create(newUser);
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(dto: Partial<User>) {
    return this.userModel.findOne(dto).exec();
  }

  async findOneByEmail(email: string) {
    return this.userModel.findOne({ email }).exec();
  }

  update(id: string, updateUserDto: Partial<UpdateUserDto>) {
    return this.userModel
      .findOneAndUpdate(new Types.ObjectId(id), updateUserDto, { new: true })
      .exec();
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
