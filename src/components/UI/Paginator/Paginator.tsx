import "./Paginator.css";
import { Dispatch, FC, SetStateAction } from "react";

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

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const paginatorButtonStyle = (pageNumber: number) => {
    return pageNumber === currentPage
      ? "paginator__page-selected"
      : "paginator__page-link";
  };

  return (
    <nav className="paginator__position">
      <ul className="paginator">
        {pageNumbers.map((number) => (
          <li key={number} className="paginator__page-number">
            <button
              onClick={() => paginate(number)}
              className={paginatorButtonStyle(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Paginator;
