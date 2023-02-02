import { Grid, Pagination } from "@mui/material";
import { FC, useEffect } from "react";
import { RootState } from "../../store";
import { fetchEmployees } from "../../store/Employees/employees";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import EmployeeCard from "../UI/EmployeeCard/Card";
import "./WebView.css";

const WebView: FC = () => {
  const employees =
    useAppSelector((state: RootState) => state.employee.employees) ?? [];

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  let employeeCount = employees.length;
  let startIndex = employeeCount < 1 ? 0 : 1;
  let endIndex = employeeCount < startIndex + 10 ? employeeCount : 10;

  const GetFooterContent: FC = () => {
    if (employeeCount === 0) {
      return <>Please add some employees.</>;
    } else {
      return (
        <>
          <div className="footer__pages">
            Showing&nbsp;
            <strong>
              {startIndex} - {endIndex}
            </strong>
            &nbsp;out of&nbsp;<strong>{employees.length}</strong>&nbsp;entries.
          </div>
          <div className="footer__pagination">
            <Pagination count={10} size="medium"></Pagination>
          </div>
        </>
      );
    }
  };

  return (
    <div className="card-container">
      <Grid container spacing={8}>
        {employees.map((employee) => (
          <Grid item xs={12} md={6} key={employee.id}>
            <EmployeeCard employee={employee} />
          </Grid>
        ))}
      </Grid>
      <div className="footer">
        <GetFooterContent />
      </div>
    </div>
  );
};

export default WebView;
