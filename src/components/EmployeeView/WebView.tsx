import { Grid } from "@mui/material";
import { FC, useEffect, useState } from "react";
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

  let employeeCount = employees.length;

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const indexOfLastEmployee = currentPage * postsPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - postsPerPage;
  const currentEmployees = employees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  return (
    <div className="card-container">
      <Grid container spacing={8}>
        {currentEmployees.map((employee) => (
          <Grid item xs={12} md={6} key={employee.id}>
            <EmployeeCard employee={employee} />
          </Grid>
        ))}
      </Grid>
      <HomePageFooter
        employeeCount={employeeCount}
        indexOfFirstEmployee={indexOfFirstEmployee}
        indexOfLastEmployee={indexOfLastEmployee}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        postsPerPage={postsPerPage}
      />
    </div>
  );
};

export default WebView;
