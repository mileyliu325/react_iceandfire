import React from "react";
import ReactLoading from 'react-loading';

const Pagination = ({ paginate, pageCount, loading }) => {

  const pages = [];

  for (let i = 1; i <= pageCount; i++) {
    pages.push(
      <li key={i} className="page-item">
        <button onClick={() => paginate(i)} className="page-link">
          {i}
        </button>
      </li>
    )
  }
  return (
    <nav>
      {loading &&
        <ReactLoading type='spin' color='#0000FF' className="mx-auto"></ReactLoading>
      }
      {!loading &&
        <ul className="pagination">
          {pages.map(page => page)}
        </ul>
      }
    </nav>
  );
};

export default Pagination;
