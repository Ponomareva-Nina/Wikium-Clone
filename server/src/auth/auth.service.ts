import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { compare, genSalt, hash } from 'bcryptjs';
import { AuthDto } from './dto/auth.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { RefreshAuthDto } from './dto/refresh-auth.dto';
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(dto: AuthDto) {
    const oldUser = await this.userService.findOne({ email: dto.email });

    if (oldUser) {
      throw new BadRequestException('User already registered');
    }

    const salt = await genSalt(10);
    const hashedPassword = await hash(dto.password, salt);

    const newUser = await this.userService.createUser({
      email: dto.email,
      password: hashedPassword,
    });

    const {
      _id,
      email,
      name,
      surname,
      birthDay,
      gender,
      education,
      avatar,
      statistics,
    } = newUser;

    const tokens = await this.issueTokenPair(String(_id), newUser.email);

    await this.userService.update(
      { _id },
      {
        refreshToken: tokens.refreshToken,
      },
    );
    return {
      user: {
        _id,
        email,
        name,
        surname,
        birthDay,
        gender,
        education,
        avatar,
        statistics,
      },
      ...tokens,
    };
  }

  async login(dto: AuthDto) {
    const user = await this.validateUser(dto);

    const tokens = await this.issueTokenPair(String(user._id), user.email);
    await this.userService.update(
      { _id: user._id },
      {
        refreshToken: tokens.refreshToken,
      },
    );
    const {
      _id,
      email,
      name,
      surname,
      birthDay,
      gender,
      education,
      avatar,
      statistics,
    } = user;
    return {
      user: {
        _id,
        email,
        name,
        surname,
        birthDay,
        gender,
        education,
        avatar,
        statistics,
      },
      ...tokens,
    };
  }

  async logout(refreshToken: string) {
    return await this.userService.update(
      { refreshToken },
      { refreshToken: '' },
    );
  }

  async refreshTokens({ refreshToken }: RefreshAuthDto) {
    if (!refreshToken) {
      throw new UnauthorizedException('Please sign in');
    }
    try {
      const result = await this.jwtService.verifyAsync(refreshToken);

      const user = await this.userService.findOne({ refreshToken });

      if (!result || !user) {
        throw new UnauthorizedException('Invalid token or expired!');
      }

      const tokens = await this.issueTokenPair(String(user._id), user.email);
      await this.userService.update(
        { _id: user._id },
        {
          refreshToken: tokens.refreshToken,
        },
      );

      const {
        _id,
        email,
        name,
        surname,
        birthDay,
        gender,
        education,
        avatar,
        statistics,
      } = user;
      return {
        user: {
          _id,
          email,
          name,
          surname,
          birthDay,
          gender,
          education,
          avatar,
          statistics,
        },
        ...tokens,
      };
    } catch (e) {
      throw new UnauthorizedException('Invalid token or expired!');
    }
  }

  async issueTokenPair(userId: string, email: string) {
    const data = { _id: userId, email };

    const refreshToken = await this.jwtService.signAsync(data, {
      expiresIn: '30d',
    });

    const accessToken = await this.jwtService.signAsync(data, {
      expiresIn: '15m',
    });

    return { refreshToken, accessToken };
  }

  async validateUser(dto: AuthDto) {
    const user = await this.userService.findOne({ email: dto.email });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const isValidPassword = await compare(dto.password, user.password);

    if (!isValidPassword) {
      throw new UnauthorizedException('Password is wrong');
    }

    return user;
  }
}
