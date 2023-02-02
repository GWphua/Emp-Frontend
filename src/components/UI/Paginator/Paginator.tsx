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

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Paginator;
