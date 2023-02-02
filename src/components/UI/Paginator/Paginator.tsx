import { FC } from "react";

interface IPaginator {
  nPages: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Paginator: FC<IPaginator> = ({ nPages, currentPage, setCurrentPage }) => {
  // Generating increasing sequence of length nPages.
  const pageNumbers = Array.from({ length: nPages }, (_, index) => index + 1);
  const prevPage = () => {};

  const nextPage = () => {};

  return (
    <>
      <ul>
        <li>
          <a className="page-link" onClick={prevPage} href="#">
            Previous
          </a>
        </li>
      </ul>
    </>
  );
};

export default Paginator;
