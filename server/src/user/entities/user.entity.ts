import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
@Schema()
export class Statistic {
  @Prop()
  gameId: number;
  @Prop()
  category: 'memory' | 'logic' | 'attention';
  @Prop()
  level: number;
  @Prop()
  countNeurons: number;
  @Prop([Date])
  attempts: Date[];
}

export type UserDocument = HydratedDocument<User>;
@Schema({ timestamps: true })
export class User {
  @Prop({ default: '' })
  name: string;
  @Prop({ default: '' })
  surname: string;
  @Prop({ default: '' })
  birthDay: string;
  @Prop({ default: '' })
  gender: string;
  @Prop({ default: '' })
  education: string;
  @Prop({ default: '' })
  avatar: string;
  @Prop({ default: 0 })
  level: number;
  @Prop({ default: 0 })
  neurons: number;
  @Prop([Statistic])
  statistics: Statistic[];
  @Prop({ unique: true })
  email: string;
  @Prop()
  password: string;
  @Prop()
  refreshToken: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
