import { Document, Schema, model, models } from 'mongoose';

export interface IUser {
  name: string;
  email: string;
  password?: string;
  image?: string;
  role: string;
  provider: string;
}

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
  image: String,
  role: {
    type: String,
    default: 'user',
  },
  provider: {
    type: String,
    default: 'credentials',
  },
}, { timestamps: true });

const User = models.user || model<IUser>('user', userSchema);

export default User;


// interface IUserDocument extends IUser, Document {}

// interface IUserModel extends Model<IUserDocument> {}