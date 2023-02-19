import { Attempt, User } from './entities/user.entity';
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
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  OmitType,
  PickType,
} from '@nestjs/swagger';
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({
    status: 200,
    type: [OmitType(User, ['refreshToken', 'password'])],
  })
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @ApiOperation({ summary: 'Upload new user avatar' })
  @ApiResponse({
    status: 200,
    type: String,
  })
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FilesInterceptor('files[]'))
  @Patch('avatar/:id')
  updateAvatar(
    @Param('id') id: string,
    @UploadedFiles() files: Express.Multer.File[],
  ): Promise<string> {
    return this.userService.updateAvatar(id, files);
  }

  @ApiOperation({ summary: 'Update user information' })
  @ApiResponse({
    status: 200,
    type: OmitType(User, ['refreshToken', 'password']),
  })
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  updateInformation(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.updateById(id, updateUserDto);
  }

  @ApiOperation({ summary: 'Change user password' })
  @ApiResponse({
    status: 200,
  })
  // @UseGuards(JwtAuthGuard)
  @Patch('password/:id')
  changePassword(
    @Param('id') id: string,
    @Body() passwordData: UpdatePasswordDto,
  ) {
    return this.userService.updatePassword(id, passwordData);
  }

  @ApiOperation({ summary: 'Add user attempt' })
  @ApiResponse({
    status: 200,
    type: PickType(User, ['statistics']),
  })
  @UseGuards(JwtAuthGuard)
  @Post('attempt/:id')
  async addAttempt(@Param('id') id: string, @Body() attempt: Attempt) {
    return await this.userService.addAttempt(id, attempt);
  }
}
