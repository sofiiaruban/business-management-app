export interface IUser {
  id: string;
  email: string;
  token: string;
}
export interface IUserData {
  email?: string;
  password?: string;
  phoneNumber?: string; 
  lastName?: string;
  firstName?: string;
  nickname?: string;
  description?: string;
  position?: string;
}
export interface IProfileData {
  phoneNumber?: string;
  lastName?: string;
  firstName?: string;
  nickname?: string;
  description?: string;
  position?: string;
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
  employeeNumber: number | any;
  service: string;
  address: string;
  description: string;
  companyType: string;
  createdAt?: string;
  updatedAt?: string;
}