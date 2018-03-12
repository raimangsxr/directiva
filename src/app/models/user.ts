import {Deserializable} from './deserializable';

export class User implements Deserializable<User> {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  is_staff: boolean;
  is_superuser: boolean;
  is_active: boolean;
  user_permissions: string[];
  groups: string[];
  token: string;
  date_joined: Date;
  last_login: Date;

  deserialize(input: any): User {
    Object.assign(this, input);
    return this;
  }

  getToken(): string {
    return this.token;
  }
}
