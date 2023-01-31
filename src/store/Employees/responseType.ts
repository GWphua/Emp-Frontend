import { Employee } from "./employees";

export interface GetAllEmployeesResponse {
  employees?: Employee[];
}

export interface ErrorResponse {
  errorMessage: string;
}

export interface GetEmployeeResponse {
  id: number;
  name: string;
  salary: number;
  department: "HR" | "PS";
}

export interface CreateEmployeeResponse {
  id: number;
  name: string;
  salary: number;
  department: "HR" | "PS";
}

export interface UpdateEmployeeResponse {
  id: number;
  name: string;
  salary: number;
  department: "HR" | "PS";
}
