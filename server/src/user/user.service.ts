import { UpdatePasswordDto } from './dto/update-password.dto';
import { ConfigService } from '@nestjs/config';
import { FileService } from './../file/file.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument, Statistic } from './entities/user.entity';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model, Types } from 'mongoose';
import { compare, genSalt, hash } from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private readonly fileService: FileService,
    private readonly configService: ConfigService,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    return this.userModel.create(createUserDto);
  }

  findAll() {
    return this.userModel.find({}, { password: 0, refreshToken: 0 });
  }

  findOne(dto: Partial<User>) {
    return this.userModel.findOne(dto).exec();
  }

  findById(id: string) {
    return this.userModel.findById(id);
  }

  updateById(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
      projection: {
        refreshToken: 0,
        updatedAt: 0,
        password: 0,
        createdAt: 0,
        _v: 0,
      },
    });
  }

  async updateAvatar(id: string, files: Express.Multer.File[]) {
    const rootPath = `${this.configService.get('SERVER_HOST')}/static`;
    const userData = await this.findById(id);
    const oldAvatarLink = userData?.avatar;
    try {
      if (oldAvatarLink) {
        const serverPath = `/uploads` + oldAvatarLink.replace(rootPath, '');
        await this.fileService.remove(serverPath);
      }
    } catch (error) {
      console.log(error);
    }
    const filesPaths = await this.fileService.saveFiles(files, 'avatars');
    const filePath = rootPath + filesPaths?.[0]?.url;
    await this.updateById(id, { avatar: filePath });
    return filePath;
  }

  update(
    dto: Partial<User> & { _id?: Types.ObjectId },
    updateUserDto: Partial<UpdateUserDto>,
  ) {
    return this.userModel
      .findOneAndUpdate(dto, updateUserDto, { new: true })
      .exec();
  }

  async updatePassword(_id: string, passwordData: UpdatePasswordDto) {
    const user = await this.findById(_id);
    if (!user) {
      throw new BadRequestException('User not found');
    }

    const isValidPassword = await compare(
      passwordData.oldPassword,
      user.password,
    );

    if (!isValidPassword) {
      throw new BadRequestException('Old password is wrong');
    }

    const salt = await genSalt(10);
    const hashedPassword = await hash(passwordData.newPassword, salt);
    await this.userModel.findByIdAndUpdate(_id, { password: hashedPassword });
  }

  async addAttempt(_id: string, attempt: Statistic) {
    return await this.userModel.findOneAndUpdate(
      { _id },
      {
        $push: { statistics: attempt },
      },
      { new: true, projection: { statistics: 1 } },
    );
  }
}
