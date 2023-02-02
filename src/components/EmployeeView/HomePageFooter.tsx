import "./HomePageFooter.css";
import { FC } from "react";
import { Employee } from "../../store/Employees/employeeType";
import { Pagination } from "@mui/material";

interface IHomePageFooter {
  employees: Employee[];
}

const HomePageFooter: FC<IHomePageFooter> = ({ employees }) => {
  let employeeCount = employees.length;
  let startIndex = employeeCount < 1 ? 0 : 1;
  let endIndex = employeeCount < startIndex + 10 ? employeeCount : 10;

  if (employeeCount === 0) {
    return <div className="footer">Please add some employees.</div>;
  } else {
    return (
      <div className="footer">
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
      </div>
    );
  }
};

export default HomePageFooter;
