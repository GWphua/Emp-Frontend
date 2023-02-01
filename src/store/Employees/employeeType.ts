export type GetAllEmployeesResponse = {
  employees?: Employee[];
};

export type ErrorResponse = {
  errorMessage: string;
};

export type GetEmployeeResponse = {
  id: number;
  name: string;
  salary: number;
  department: "HR" | "PS";
};

export type CreateEmployeeResponse = {
  id: number;
  name: string;
  salary: number;
  department: "HR" | "PS";
};

export type UpdateEmployeeResponse = {
  id: number;
  name: string;
  salary: number;
  department: "HR" | "PS";
};

export type Employee = {
  id: number;
  name: string;
  salary: number;
  department: "HR" | "PS";
};

export type EmployeesState = {
  employees?: Employee[];
  referencedEmployee?: Employee;
};
