import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument, Types } from 'mongoose';
@Schema()
export class Attempt {
  @ApiProperty({ example: 1, description: 'Game id' })
  @Prop()
  gameId: number;

  @ApiProperty({ example: 'logic', description: 'Game category' })
  @Prop()
  category: string;

  @ApiProperty({ example: 5, description: 'Count neurons' })
  @Prop()
  neurons: number;

  @ApiProperty({
    example: '2023-02-18T16:39:42.635Z',
    description: 'Attempt date',
  })
  @Prop()
  date: string;
}

export type UserDocument = HydratedDocument<User>;
@Schema({ timestamps: true })
export class User {
  @ApiProperty({ example: 'adhfa767a47ah47f4oa7', description: 'User id' })
  _id: Types.ObjectId;

  @ApiProperty({ example: 'Ivan', description: 'User name' })
  @Prop({ default: '' })
  name: string;

  @ApiProperty({ example: 'Ivanov', description: 'User surname' })
  @Prop({ default: '' })
  surname: string;

  @ApiProperty({ example: '1999-03-02', description: 'User birthday' })
  @Prop({ default: '' })
  birthDay: string;

  @ApiProperty({ example: 'male', description: 'User gender' })
  @Prop({ default: '' })
  gender: string;

  @ApiProperty({ example: 'Higher', description: 'User education' })
  @Prop({ default: '' })
  education: string;

  @ApiProperty({
    example: 'https://somethingpath.com/avatar-1',
    description: 'User avatar path',
  })
  @Prop({ default: '' })
  avatar: string;

  @ApiProperty({
    example: [
      {
        gameId: 1,
        category: 'logic',
        neurons: 5,
        date: '2023-02-18T16:39:42.635Z',
      },
    ],
    description: 'User game statistics',
  })
  @Prop([{ type: Attempt, _id: false }])
  statistics: Attempt[];

  @ApiProperty({
    example: 'something@test.test',
    description: 'User email',
  })
  @Prop({ unique: true })
  email: string;
  @Prop()
  @ApiProperty({
    example: 'hashpassword',
    description: 'User password',
  })
  password: string;

  @ApiProperty({
    example: 'jasdkfjlksadjfaiwu4t23r2.2398729r.fsdaf',
    description: 'User refresh token',
  })
  @Prop()
  refreshToken: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
