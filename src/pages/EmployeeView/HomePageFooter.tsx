import { Dispatch, FC, SetStateAction } from "react";
import Paginator from "../../components/Paginator/Paginator";
import "./HomePageFooter.css";

interface IHomePageFooter {
  employeeCount: number;
  indexOfFirstEmployee: number;
  indexOfLastEmployee: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  postsPerPage: number;
}

const HomePageFooter: FC<IHomePageFooter> = ({
  employeeCount,
  indexOfFirstEmployee,
  indexOfLastEmployee,
  currentPage,
  setCurrentPage,
  postsPerPage,
}) => {
  if (employeeCount === 0) {
    return <div className="footer">Please add some employees.</div>;
  } else {
    return (
      <div className="footer">
        <div className="footer__pages">
          Showing&nbsp;
          <strong>
            {indexOfFirstEmployee + 1}&nbsp;-&nbsp;
            {Math.min(indexOfLastEmployee, employeeCount)}
          </strong>
          &nbsp;out of&nbsp;<strong>{employeeCount}</strong>&nbsp;entries.
        </div>

        {employeeCount > 10 && (
          <Paginator
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            postsPerPage={postsPerPage}
            totalPosts={employeeCount}
          ></Paginator>
        )}
      </div>
    );
  }
};

export default HomePageFooter;
