export interface User {
  id: number | string;
  username: string;
  email: string;
  password: string;
  role: Role;
}

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}
