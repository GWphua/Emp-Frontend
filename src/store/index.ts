import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./Employees/employees";
import screenSettingsReducer from "./ScreenView/screenSettings";
import screenSizeReducer from "./ScreenView/screenSize";
import userReducer from "./Users/users";

const store = configureStore({
  reducer: {
    screenSize: screenSizeReducer,
    screenSettings: screenSettingsReducer,
    employee: employeeReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
