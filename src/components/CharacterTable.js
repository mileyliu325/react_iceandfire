import React, { Component } from "react";
import { Table } from "react-bootstrap";

const CORS_FIX = "https://cors-anywhere.herokuapp.com/";
const HOST = "https://anapioficeandfire.com/api/";
const DEV_HOST = CORS_FIX + HOST;
const BOOK_NUM = 1;
const MAX_FETCH_COUNT = 50;
const PAGE_SIZE = 10;
const ACTIVE = 1;

class CharacterTable extends Component {
  constructor() {
    super();
    this.state = {
      characterUrls: null,
      characters: [],
      isLoading: false
    };
  }

  render() {
    const characters = this.props.characters;

    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Born</th>
              <th>Culture</th>
            </tr>
          </thead>
          <tbody>
            {characters.length == 50 &&
              characters.map((result, index) => (
                <tr key={result.url}>
                  <td>{result.name}</td>
                  <td>{result.gender}</td>
                  <td>{result.born}</td>
                  <td>{result.culture}</td>
                </tr>
                //   onClick={this.handleTableRowClick(result.films, index)}
              ))}
          </tbody>
        </Table>

        {/* {bookDataLoaded ? <Pagination totalPage={payload.count} /> : null} */}
        {/* {showPopUp && (
          <div
            name={payload.results[resultIndex].name}
            height={payload.results[resultIndex].height}
            birthY={payload.results[resultIndex].birth_year}
            gender={payload.results[resultIndex].gender}
            films={filmsOfPeople}
          />
        )} */}
      </div>
    );
  }
}
export default CharacterTable;
