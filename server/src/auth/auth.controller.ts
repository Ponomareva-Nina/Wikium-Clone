import { LoginResponseDto } from './dto/login-response.dto';
import { JwtAuthGuard } from './guards/jwt.guard';
import { REFRESH_TOKEN_EXPIRE } from './auth.constants';
import {
  Controller,
  Post,
  HttpCode,
  Body,
  Get,
  Res,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'User register' })
  @ApiResponse({
    status: 200,
    type: LoginResponseDto,
  })
  @Post('register')
  async register(
    @Body() dto: AuthDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const data = await this.authService.register(dto);
    response.cookie('refreshToken', data.refreshToken, {
      secure: true,
      sameSite: 'none',
      maxAge: REFRESH_TOKEN_EXPIRE,
      httpOnly: true,
    });
    return {
      user: data.user,
      accessToken: data.accessToken,
    };
  }

  @ApiOperation({ summary: 'User login' })
  @ApiResponse({
    status: 200,
    type: LoginResponseDto,
  })
  @HttpCode(200)
  @Post('login')
  async login(
    @Body() dto: AuthDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const data = await this.authService.login(dto);
    response.cookie('refreshToken', data.refreshToken, {
      secure: true,
      sameSite: 'none',
      maxAge: REFRESH_TOKEN_EXPIRE,
      httpOnly: true,
    });
    return {
      user: data.user,
      accessToken: data.accessToken,
    };
  }

  @ApiOperation({ summary: 'User logout' })
  @ApiResponse({ status: 200 })
  @UseGuards(JwtAuthGuard)
  @Get('logout')
  async logout(
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { refreshToken } = request.cookies;
    this.authService.logout(refreshToken);
    response.clearCookie('refreshToken');
  }

  @ApiOperation({ summary: 'User token refresh' })
  @ApiResponse({ status: 200 })
  @HttpCode(200)
  @Get('refresh')
  async refresh(
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { refreshToken } = request.cookies;
    const data = await this.authService.refreshTokens({ refreshToken });
    response.clearCookie('refreshToken');
    response.cookie('refreshToken', data.refreshToken, {
      secure: true,
      maxAge: REFRESH_TOKEN_EXPIRE,
      httpOnly: true,
      sameSite: 'none',
    });
    return {
      user: data.user,
      accessToken: data.accessToken,
    };
  }
}
