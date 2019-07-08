import React from "react";
import ReactLoading from 'react-loading';

const Pagination = ({ paginate, pageNumbers, loading }) => {
  
  return (
    <React.Fragment>
      {loading &&
        <ReactLoading type='spin' color='#0000FF' className="mx-auto"></ReactLoading>
      }
      {!loading &&
        <nav>
          <ul className="pagination">
            {pageNumbers.map(number => (
              <li key={number} className="page-item">
                <button onClick={() => paginate(number)} className="page-link">
                  {number}
                </button>
              </li>
            ))}
          </ul>
        </nav>}

    </React.Fragment>
  );
};

export default Pagination;
