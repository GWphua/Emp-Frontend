import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { EmployeeFormData } from "../../components/AddEmployee/EmployeeFormBody";
import {
  CreateEmployeeResponse,
  GetAllEmployeesResponse,
} from "./responseType";

const EMPLOYEE_URL = "http://localhost:3000/employee/";

export type Employee = {
  id: number;
  name: string;
  salary: number;
  department: "HR" | "PS";
};

export interface EmployeesState {
  employees?: Employee[];
  lastEmployee?: Employee;
}

export const fetchEmployees = createAsyncThunk("getAllEmployees", async () => {
  const response = await axios({
    method: "get",
    url: EMPLOYEE_URL,
    responseType: "json",
  });
  console.log(response);
  return response.data as GetAllEmployeesResponse;
});

export const createEmployee = createAsyncThunk(
  "createEmployee",
  async (employeeFormData: EmployeeFormData) => {
    const response = await axios({
      method: "post",
      url: EMPLOYEE_URL,
      data: employeeFormData,
      responseType: "json",
    });
    console.log(response);
    return response.data as CreateEmployeeResponse;
  }
);

const employeesSlice = createSlice({
  name: "employees",
  initialState: {} as EmployeesState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchEmployees.fulfilled,
      (state: EmployeesState, action: PayloadAction<EmployeesState>) => {
        const allEmployees: Employee[] = [];

        action.payload.employees?.forEach((employee) => {
          allEmployees.push(employee);
        });

        state.employees = allEmployees;
      }
    );
  },
});

export default employeesSlice.reducer;
