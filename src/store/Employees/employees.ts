import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { EmployeeFormData } from "../../components/AddEmployee/EmployeeFormBody";
import { ErrorToast } from "../../components/UI/Toast/ToastTypes";
import {
  CreateEmployeeResponse,
  Employee,
  EmployeesState,
  GetAllEmployeesResponse,
  UpdateEmployeeResponse,
} from "./employeeType";

const EMPLOYEE_URL = "http://localhost:3000/employee/";

export const fetchEmployees = createAsyncThunk("getAllEmployees", async () => {
  try {
    const response = await axios({
      method: "get",
      url: EMPLOYEE_URL,
      responseType: "json",
    });

    console.log(response);
    return response.data as GetAllEmployeesResponse;
  } catch (error: unknown) {
    if (error === null || error === undefined) {
      ErrorToast.showToast("Cannot get Employees from backend");
    } else {
      ErrorToast.showToast(error.toString());
    }
  }
});

export const createEmployee = createAsyncThunk(
  "createEmployee",
  async (createEmployeeData: EmployeeFormData) => {
    const response = await axios({
      method: "post",
      url: EMPLOYEE_URL,
      data: createEmployeeData,
      responseType: "json",
    });

    console.log(response);
    return response.data as CreateEmployeeResponse;
  }
);

export const updateEmployee = createAsyncThunk(
  "updateEmployee",
  async (updateEmployeeData: {
    id: number;
    employeeFormData: EmployeeFormData;
  }) => {
    const response = await axios({
      method: "put",
      url: EMPLOYEE_URL + updateEmployeeData.id,
      data: updateEmployeeData.employeeFormData,
      responseType: "json",
    });

    console.log(response);
    return response.data as UpdateEmployeeResponse;
  }
);

export const deleteEmployee = createAsyncThunk(
  "deleteEmployee",
  async (deleteEmployeeData: Employee) => {
    console.log(deleteEmployeeData);
    const response = await axios({
      method: "delete",
      url: EMPLOYEE_URL + deleteEmployeeData.id,
      responseType: "json",
    });

    console.log(response);
    return;
  }
);

const employeesSlice = createSlice({
  name: "employees",
  initialState: {} as EmployeesState,
  reducers: {
    selectEmployee: (
      state: EmployeesState,
      actions: PayloadAction<Employee>
    ) => {
      state.referencedEmployee = actions.payload;
    },
    unselectEmployee: (state: EmployeesState) => {
      state.referencedEmployee = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchEmployees.fulfilled,
      (
        state: EmployeesState,
        action: PayloadAction<GetAllEmployeesResponse | undefined>
      ) => {
        const allEmployees: Employee[] = [];

        if (action.payload === undefined) {
          state.employees = allEmployees;
          return;
        }

        if (action.payload.employees !== undefined) {
          action.payload.employees.forEach((employee) => {
            allEmployees.push(employee);
          });
        }
        state.employees = allEmployees;
      }
    );
  },
});

export const { selectEmployee, unselectEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;
