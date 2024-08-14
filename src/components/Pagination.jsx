import React from "react";

const Pagination = ({
  currentPage,
  itemsPerPage,
  totalItems,
  onPageChange,
}) => {
  const numPages = Math.ceil(totalItems / itemsPerPage);

  const handleClick = (page) => {
    onPageChange(page);
  };

  return (
    <div className="pagination">
      <ul>
        <li
          onClick={() => handleClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </li>
        {Array.from({ length: numPages }, (_, index) => (
          <li
            key={index + 1}
            className={currentPage === index + 1 ? "active" : ""}
            onClick={() => handleClick(index + 1)}
          >
            {index + 1}
          </li>
        ))}
        <li
          onClick={() => handleClick(currentPage + 1)}
          disabled={currentPage === numPages}
        >
          Next
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
