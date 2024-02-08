import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import config from '../../../config';
import { IUser, UserModel } from './users.interface';

const userSchema = new Schema<IUser, UserModel>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: 0,
    },
    needPasswordChange: {
      type: Boolean,
      default: true,
    },
    passwordChangedAt: {
      type: Date,
    },
    student: {
      type: Schema.Types.ObjectId,
      ref: 'Student',
    },
    faculty: {
      type: Schema.Types.ObjectId,
      ref: 'Faculty',
    },
    admin: {
      type: Schema.Types.ObjectId,
      ref: 'Admin',
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

// userSchema.methods.isUserExists = async function (
//   id: string,
// ): Promise<Partial<IUser | null>> {
//   const user = await User.findOne(
//     { id },
//     { id: 1, password: 1, needPasswordChange: 1 },
//   );
//   return user;
// };

// userSchema.methods.isPasswordMatched = async function (
//   givenPass: string,
//   savedPass: string,
// ): Promise<boolean> {
//   const isMatched = await bcrypt.compare(givenPass, savedPass);
//   return isMatched;
// };

userSchema.statics.isUserExists = async function (
  id: string,
): Promise<Pick<IUser, 'id' | 'password' | 'needPasswordChange'> | null> {
  const user = await User.findOne(
    { id },
    { id: 1, password: 1, needPasswordChange: 1, role: 1 },
  );
  return user;
};

userSchema.statics.isPasswordMatched = async function (
  givenPass: string,
  savedPass: string,
): Promise<boolean> {
  const isMatched = await bcrypt.compare(givenPass, savedPass);
  return isMatched;
};

// hash pass
userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_rounds),
  );

  if (!this.needPasswordChange) {
    this.passwordChangedAt = new Date();
  }

  next();
});

export const User = model<IUser, UserModel>('User', userSchema);
