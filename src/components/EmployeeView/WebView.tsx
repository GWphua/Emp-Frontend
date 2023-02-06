import { Grid } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { RootState } from "../../store";
import {
  fetchEmployees,
  selectEmployee,
} from "../../store/Employees/employees";
import { Employee } from "../../store/Employees/employeeType";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { openModal } from "../../store/ScreenView/screenSettings";
import EmployeeCard from "../UI/EmployeeCard/Card";
import EmployeeModalContent from "../UI/Modal/EmployeeModalContent";
import ModalComponent from "../UI/Modal/ModalComponent";
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

  // Automatically shifts to previous page if all Employees are removed.
  useEffect(() => {
    if (currentEmployees.length === 0) {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    }
  }, [currentEmployees, currentPage]);

  const openDeleteEmployeeModal = (employee: Employee) => {
    dispatch(selectEmployee(employee));
    dispatch(openModal());
  };

  return (
    <div className="card-container">
      <Grid container spacing={8}>
        {currentEmployees.map((employee: Employee) => (
          <Grid item xs={12} md={6} key={employee.id}>
            <EmployeeCard
              openDeleteEmployeeModal={openDeleteEmployeeModal}
              employee={employee}
            />
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
      <ModalComponent>
        <EmployeeModalContent />
      </ModalComponent>
    </div>
  );
};

export default WebView;
