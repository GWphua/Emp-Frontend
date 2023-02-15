export type UserDepartmentType = "HR" | "PS" | "ADMIN";

export type SignupResponse = {
  username: string;
  department: UserDepartmentType;
};

export type LoginResponse = {
  loggedIn: boolean;
};
