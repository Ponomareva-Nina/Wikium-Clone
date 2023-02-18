import { Statistic } from './entities/user.entity';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { JwtAuthGuard } from './../auth/guards/jwt.guard';
import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  UseGuards,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findById(id);
  }

  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FilesInterceptor('files[]'))
  @Patch('avatar/:id')
  updateAvatar(
    @Param('id') id: string,
    @UploadedFiles() files: Express.Multer.File[],
  ): Promise<string> {
    return this.userService.updateAvatar(id, files);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateById(id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('password/:id')
  changePassword(
    @Param('id') id: string,
    @Body() passwordData: UpdatePasswordDto,
  ) {
    return this.userService.updatePassword(id, passwordData);
  }

  @UseGuards(JwtAuthGuard)
  @Post('attempt/:id')
  addAttempt(@Param('id') id: string, @Body() attempt: Statistic) {
    return this.userService.addAttempt(id, attempt);
  }
}
