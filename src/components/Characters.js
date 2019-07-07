import React from "react";

const Characters = ({ characters, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Born</th>
          <th>Culture</th>
        </tr>
      </thead>
      <tbody>
        {characters.map((character, index) => (
          <tr key={character.url}>
            <td>{index}</td>
            <td>{character.name}</td>
            <td>{character.gender}</td>
            <td>{character.born}</td>
            <td>{character.culture}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Characters;
