import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const EMPLOYEE_URL = "http://localhost:3000/employee/";

interface Employee {
  id: number;
  name: string;
  salary: number;
  department: "HR" | "PS";
}

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
  return response.data as EmployeesState;
});

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
