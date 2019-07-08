import React from "react";
import DetailModal from "./DetailModal";
import ReactLoading from 'react-loading';

const Characters = ({ characters, loading }) => {
  if (loading) {
    return <ReactLoading type='spin' color='#0000FF' className="mx-auto"></ReactLoading>;
  }

  return (
    <div className="center">
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Born</th>
            <th>Died</th>
            <th>Culture</th>
            <th>More</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character) => (
            <tr key={character.url}>
              <td>{character.name}</td>
              <td>{character.gender}</td>
              <td>{character.born}</td>
              <td>{character.died}</td>
              <td>{character.culture}</td>
              <td>
                <DetailModal character={character} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Characters;
