import { User } from '../../@generated/prisma-nestjs-graphql/user/user.model';

export interface RequestWithUser extends Request {
  user: User;
}
