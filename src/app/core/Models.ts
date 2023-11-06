import { IUser } from "./Interfaces";

export class User implements IUser {

  id: number;
  userName: string;
  email: string;
  password: string;

  constructor(user?: any) {
    this.id = user.id != null ? user.id : null;
    this.userName = user.userName != null ? user.userName : null;
    this.email = user.email != null ? user.email : null;
    this.password = user.password != null ? user.password : null;
  }

}
