import { Controller, Post, HttpCode, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() dto: AuthDto) {
    return null;
  }

  @HttpCode(200)
  @Post('login')
  async login(@Body() dto: AuthDto) {
    return null;
  }

  @Get('logout')
  async logout() {
    return null;
  }

  @Get('refresh')
  async refresh() {
    return null;
  }
}
