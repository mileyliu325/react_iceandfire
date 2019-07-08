import React from "react";

const Detail = ({ character }) => {

  const characterKeys = Object.keys(character);

  //Gender,culture,born,died,Title,aliase,tv, playby
  const choosenkeys = [characterKeys[2], characterKeys[3], characterKeys[4], characterKeys[5], characterKeys[6], characterKeys[7], characterKeys[14], characterKeys[15]];

  return (
    <div>
      <hr />
      {choosenkeys && choosenkeys.map((key, index) =>
        <p key={index}>{`${key.toUpperCase()} : ${character[key]}`}</p>
      )}
    </div>
  );
};

export default Detail;
