import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;
@Schema()
export class User {
  @Prop()
  name: string;
  @Prop()
  surname: string;
  @Prop()
  birthDay: string;
  @Prop()
  gender: string;
  @Prop()
  education: string;
  @Prop()
  avatar: string;
  @Prop()
  level: number;
  @Prop()
  neurons: number;
  @Prop({ unique: true })
  email: string;
  @Prop()
  password: string;
  @Prop()
  refreshToken: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
