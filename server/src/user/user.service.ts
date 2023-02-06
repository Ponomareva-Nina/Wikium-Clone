import { ConfigService } from '@nestjs/config';
import { FileService } from './../file/file.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model, Types } from 'mongoose';

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

  async updateAvatar(id: string, files: Express.Multer.File[]) {
    const ROOT_PATH = `${this.configService.get('SERVER_HOST')}/static`;
    const userData = await this.findById(id);
    const oldAvatarLink = userData?.avatar;

    if (oldAvatarLink) {
      const serverPath = `/uploads` + oldAvatarLink.replace(ROOT_PATH, '');
      await this.fileService.remove(serverPath);
    }
    const filesPaths = await this.fileService.saveFiles(files, 'avatars');
    const filePath = ROOT_PATH + filesPaths?.[0]?.url;
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
}
