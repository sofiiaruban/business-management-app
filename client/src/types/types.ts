export interface IUser {
  id: string;
  email: string;
  token: string;
}
export interface IUserData {
  email: string;
  password: string;
}
export interface IResponseUser {
  email: string;
  id: number;
  password: string;
  createdAt: string;
  updatedAt: string;
}
export interface IResponseUserData {
  token: string;
  user: IResponseUser;
}
export interface ICompany {
  id: number;
  name: string;
  employeeNumber: number;
  service: string;
  address: string;
  description: string;
  type: string;
  createdAt: string;
  updatedAt: string;
}