import React from "react";

const Detail = ({ character }) => {

  return (
    <div>

      <div className="card">
        <div className="card-body">
          Aliases:
      {character.titles.length > 0 &&
            character.aliases[0].length > 0 &&
            character.aliases.map(aliase => <li key={aliase}>{aliase}</li>)}
        </div>
      </div>
      <br />

      <div className="card">
        <div className="card-body">
          Titles:
      {character.titles.length > 0 &&
            character.titles[0].length > 0 &&
            character.titles.map(title => <li key={title}>{title}</li>)}
        </div>
      </div>
      <br />

      <div className="card">
        <div className="card-body">
          PlayedBy:
      {character.playedBy.length > 0 &&
            character.playedBy[0].length > 0 &&
            character.playedBy.map(playedby => <li key={playedby}>{playedby}</li>)}
        </div>
      </div>
      <br />

      <div className="card">
        <div className="card-body">
          TV Series:
      {character.tvSeries.length > 0 &&
            character.tvSeries[0].length > 0 &&
            character.tvSeries.map(tvSerie => <li key={tvSerie}>{tvSerie}</li>)}
        </div>
      </div>
      <br />

    </div>
  );
};

export default Detail;
