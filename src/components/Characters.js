import React from "react";
import Searchable from "../components/Searchable";

const Characters = ({ characters, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="center">
      <Searchable elements={characters} />

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
          {characters.map((character, index) => (
            <tr key={character.url}>
              <td>{character.name}</td>
              <td>{character.gender}</td>
              <td>{character.born}</td>
              <td>{character.died}</td>
              <td>{character.culture}</td>
              <td>
                <button type="button" class="btn btn-info">
                  More
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Characters;
