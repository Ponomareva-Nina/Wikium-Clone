import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';

export class LoginResponseDto {
  @ApiProperty({
    example: {
      _id: 'adhfa767a47ah47f4oa7',
      name: 'Ivan',
      surname: 'Ivanov',
      birthDay: '1999-03-02',
      gender: 'male',
      education: 'Higher',
      avatar: 'https://somethingpath.com/avatar-1',
      statistics: [
        {
          gameId: 1,
          category: 'logic',
          neurons: 5,
          date: '2023-02-18T16:39:42.635Z',
        },
      ],
      email: 'something@test.test',
    },
    description: 'User data',
  })
  user: Omit<User, 'password' | 'refreshToken'>;
  @ApiProperty({
    example: 'fahsdjhfjsadf.asjdfkjsaljf3jfs.j3o2jf',
    description: 'User accessToken',
  })
  accessToken: string;
}
