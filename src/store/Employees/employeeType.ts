export type EmployeeDepartmentType = "HR" | "PS";

export type Employee = {
  id: number;
  name: string;
  salary: number;
  department: EmployeeDepartmentType;
};

export type GetAllEmployeesResponse = {
  employees: Employee[];
};

export type GetEmployeeResponse = {
  id: number;
  name: string;
  salary: number;
  department: EmployeeDepartmentType;
};

export type CreateEmployeeResponse = {
  id: number;
  name: string;
  salary: number;
  department: EmployeeDepartmentType;
};

export type UpdateEmployeeResponse = {
  id: number;
  name: string;
  salary: number;
  department: EmployeeDepartmentType;
};

export type EmployeesState = {
  employees?: Employee[];
  referencedEmployee?: Employee;
};
