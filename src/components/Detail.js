import React from "react";

const Detail = ({ character }) => {
  console.log(JSON.stringify(character));
  return (
    <div>
      Aliases:
      {character.titles.length > 0 &&
        character.aliases[0].length > 0 &&
        character.aliases.map(aliase => <li key={aliase}>{aliase}</li>)}
      <br />
      Titles:
      {character.titles.length > 0 &&
        character.titles[0].length > 0 &&
        character.titles.map(title => <li key={title}>{title}</li>)}
      <br />
      PlayedBy:
      {character.playedBy.length > 0 &&
        character.playedBy[0].length > 0 &&
        character.playedBy.map(playedby => <li key={playedby}>{playedby}</li>)}
      <br />
      TV Series:
      {character.tvSeries.length > 0 &&
        character.tvSeries[0].length > 0 &&
        character.tvSeries.map(tvSerie => <li key={tvSerie}>{tvSerie}</li>)}
    </div>
  );
};

export default Detail;
