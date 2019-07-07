import React from "react";

const Characters = ({ characters, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    // <ul className="list-group mb-4">
    //   {characters.map(character => (
    //     <li key={character.id} className="list-group-item">
    //       {/* {character.title}
    //       {character.gender} */}
    //       {character}
    //     </li>
    //   ))}
    // </ul>

    <table>
      <thead>
        <tr>
          {/* <th>#</th> */}
          <th>Name</th>
          {/* <th>Gender</th>
          <th>Born</th>
          <th>Culture</th> */}
        </tr>
      </thead>
      <tbody>
        {characters.map((character, index) => (
          <tr key={index}>
            {/* <td>{index}</td> */}
            <td>{character}</td>
            {/* <td>{character.gender}</td>
            <td>{character.born}</td>
            <td>{character.culture}</td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Characters;
