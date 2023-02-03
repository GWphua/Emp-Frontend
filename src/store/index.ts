import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./Employees/employees";
import screenReducer from "./ScreenView/screenSize";

const store = configureStore({
  reducer: { screen: screenReducer, employee: employeeReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
