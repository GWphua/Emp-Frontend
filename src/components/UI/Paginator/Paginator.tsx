import "./Paginator.css";
import { Dispatch, FC, SetStateAction } from "react";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

interface IPaginator {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  postsPerPage: number;
  totalPosts: number;
}

const Paginator: FC<IPaginator> = ({
  currentPage,
  setCurrentPage,
  postsPerPage,
  totalPosts,
}) => {
  // Generating increasing sequence of length nPages.
  const pageNumbers = Array.from(
    { length: Math.ceil(totalPosts / postsPerPage) },
    (_, index) => index + 1
  );

  const paginateToPageNumber = (pageNumber: number) =>
    setCurrentPage(pageNumber);

  return (
    <nav className="paginator__position">
      <ul className="paginator">
        <li key="prev" className="paginator__page-number">
          <button
            onClick={() => paginateToPageNumber(currentPage - 1)}
            disabled={currentPage === 1}
            className={`paginator__button ${
              currentPage === 1 ? "disabled" : ""
            }`}
          >
            <ArrowLeft />
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="paginator__page-number">
            <button
              onClick={() => paginateToPageNumber(number)}
              className={`paginator__button ${
                number === currentPage ? "selected" : ""
              }`}
            >
              {number}
            </button>
          </li>
        ))}
        <li key="next" className="paginator__page-number">
          <button
            onClick={() => paginateToPageNumber(currentPage + 1)}
            disabled={currentPage === pageNumbers.length}
            className={`paginator__button ${
              currentPage === pageNumbers.length ? "disabled" : ""
            }`}
          >
            <ArrowRight />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Paginator;
