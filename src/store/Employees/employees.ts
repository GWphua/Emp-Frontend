import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import {
  EmployeeCreatedToast,
  EmployeeDeletedToast,
  EmployeeUpdatedToast,
} from "../../components/Toast/EmployeeToastTypes";
import { EmployeeFormData } from "../../pages/AddEmployee/EmployeeFormBody";
import { handleError, setAuthorizationToken } from "../handlers";
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
    setAuthorizationToken();
    const response = await axios({
      method: "get",
      url: EMPLOYEE_URL,
      responseType: "json",
    });

    return response.data as GetAllEmployeesResponse;
  } catch (error: unknown) {
    handleError(error);
    return { employees: [] } as GetAllEmployeesResponse;
  }
});

export const createEmployee = createAsyncThunk(
  "createEmployee",
  async (createEmployeeData: EmployeeFormData) => {
    try {
      setAuthorizationToken();
      const response = await axios({
        method: "post",
        url: EMPLOYEE_URL,
        data: createEmployeeData,
        responseType: "json",
      });

      EmployeeCreatedToast.showToast(response.data.name);
      return response.data as CreateEmployeeResponse;
    } catch (error: unknown) {
      handleError(error);
    }
  }
);

export const updateEmployee = createAsyncThunk(
  "updateEmployee",
  async (updateEmployeeData: {
    id: number;
    employeeFormData: EmployeeFormData;
  }) => {
    try {
      setAuthorizationToken();
      const response = await axios({
        method: "put",
        url: EMPLOYEE_URL + updateEmployeeData.id,
        data: updateEmployeeData.employeeFormData,
        responseType: "json",
      });

      EmployeeUpdatedToast.showToast(response.data.name);
      return response.data as UpdateEmployeeResponse;
    } catch (error: unknown) {
      handleError(error);
    }
  }
);

export const deleteEmployee = createAsyncThunk(
  "deleteEmployee",
  async (deleteEmployeeData: Employee) => {
    try {
      setAuthorizationToken();
      await axios({
        method: "delete",
        url: EMPLOYEE_URL + deleteEmployeeData.id,
        responseType: "json",
      });

      EmployeeDeletedToast.showToast(deleteEmployeeData.name);
      return;
    } catch (error: unknown) {
      handleError(error);
    }
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
        action: PayloadAction<GetAllEmployeesResponse>
      ) => {
        const allEmployees: Employee[] = [];

        action.payload.employees.forEach((employee) => {
          allEmployees.push(employee);
        });

        state.employees = allEmployees;
      }
    );
  },
});

export const { selectEmployee, unselectEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;
