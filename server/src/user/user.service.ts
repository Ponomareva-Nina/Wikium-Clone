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
    return this.userModel.create(createUserDto);
  }

  findAll() {
    return this.userModel.find();
  }

  findOne(dto: Partial<User>) {
    return this.userModel.findOne(dto).exec();
  }

  findById(id: string) {
    return this.userModel.findById(id);
  }

  updateById(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, updateUserDto);
  }

  update(
    dto: Partial<User> & { _id?: Types.ObjectId },
    updateUserDto: Partial<UpdateUserDto>,
  ) {
    return this.userModel
      .findOneAndUpdate(dto, updateUserDto, { new: true })
      .exec();
  }
}
