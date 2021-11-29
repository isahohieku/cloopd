import type { IUser } from './user';

export interface IResponse {
  status: boolean;
  message: string;
  statusCode: number;
}

export interface UserResponse extends IResponse {
  data: IUser;
}
