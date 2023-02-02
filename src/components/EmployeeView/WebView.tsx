import { Grid } from "@mui/material";
import { FC, useEffect } from "react";
import { RootState } from "../../store";
import { fetchEmployees } from "../../store/Employees/employees";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import EmployeeCard from "../UI/EmployeeCard/Card";
import HomePageFooter from "./HomePageFooter";
import "./WebView.css";

const WebView: FC = () => {
  const employees =
    useAppSelector((state: RootState) => state.employee.employees) ?? [];

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  return (
    <div className="card-container">
      <Grid container spacing={8}>
        {employees.map((employee) => (
          <Grid item xs={12} md={6} key={employee.id}>
            <EmployeeCard employee={employee} />
          </Grid>
        ))}
      </Grid>
      <HomePageFooter employees={employees} />
    </div>
  );
};

export default WebView;
