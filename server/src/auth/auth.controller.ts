import { REFRESH_TOKEN_EXPIRE } from './auth.constants';
import {
  Controller,
  Post,
  HttpCode,
  Body,
  Get,
  Res,
  Req,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(
    @Body() dto: AuthDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const data = await this.authService.register(dto);
    response.cookie('refreshToken', data.refreshToken, {
      maxAge: REFRESH_TOKEN_EXPIRE,
      httpOnly: true,
    });
    return {
      user: data.user,
      accessToken: data.accessToken,
    };
  }

  @HttpCode(200)
  @Post('login')
  async login(
    @Body() dto: AuthDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const data = await this.authService.login(dto);
    response.cookie('refreshToken', data.refreshToken, {
      maxAge: REFRESH_TOKEN_EXPIRE,
      httpOnly: true,
    });
    return {
      user: data.user,
      accessToken: data.accessToken,
    };
  }

  @Get('logout')
  async logout(
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { refreshToken } = request.cookies;
    this.authService.logout(refreshToken);
    response.clearCookie('refreshToken');
  }

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
      maxAge: REFRESH_TOKEN_EXPIRE,
      httpOnly: true,
    });
    return {
      user: data.user,
      accessToken: data.accessToken,
    };
  }
}
