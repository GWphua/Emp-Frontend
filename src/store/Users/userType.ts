export type UserDepartmentType = "HR" | "PS" | "ADMIN";

export type SignupResponse = {
  username: string;
  department: UserDepartmentType;
};

export type LoginResponse = {
  username: string;
  department: UserDepartmentType;
};

export type UsersState = {
  authorized: boolean;
  username?: string;
  department?: UserDepartmentType;
};
