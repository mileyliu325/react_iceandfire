import React from "react";
import ReactLoading from 'react-loading';

const Pagination = ({ paginate, pageCount, loading }) => {
  if (loading) {
    return <ReactLoading type='spin' color='#0000FF' className="mx-auto"></ReactLoading>;
  }

  const pageNumbers = [];

  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
