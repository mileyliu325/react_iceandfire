import React, { Component } from "react";
import axios from "axios";

import Characters from "../components/Characters";
import Pagination from "../components/Pagination";
import Searchable from "../components/Searchable";

//delete it if no CORS issue
const CORS_FIX = "https://cors-anywhere.herokuapp.com/";

const HOST = "https://anapioficeandfire.com/api/";
const DEV_HOST = CORS_FIX + HOST;
const BOOK_NUM = 1;
const MAX_FETCH_COUNT = 50;
const PAGE_SIZE = 10;
const ACTIVE = 1;

const pageCount = Math.ceil(MAX_FETCH_COUNT / PAGE_SIZE);
class CharactersTablePage extends Component {
  constructor() {
    super();
    this.state = {
      urls: [], //array of characters' api urls
      characters: [], //arrary of character objects
      currentPage: ACTIVE,
      charactersPerPage: PAGE_SIZE,
      isLoading: false
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    this.fetchBook();
  }

  fetchBook = () => {
    axios
      .get(`${DEV_HOST}books/${BOOK_NUM}`)
      //get urls
      .then(
        res => res.data.characters
          .slice(0, MAX_FETCH_COUNT)
          .sort()
      )
      //map url to data
      .then(urls => urls
        .map(
          url =>
            axios
              .get(`${CORS_FIX}${url}`)
              .then(res => res.data))
      )
      //collect data
      .then(resultPromises => Promise.all(resultPromises))
      //set state
      .then(resultArray => {
        this.setState({
          isLoading: false,
          characters: resultArray
        })
      })
      .catch(err => {
        console.warn(err);
      });
  };

  render() {
    console.log("render");
    const { characters, isLoading } = this.state;

    // Get current character
    const indexOfLastCharacter =
      this.state.currentPage * this.state.charactersPerPage;

    const indexOfFirstCharacter =
      indexOfLastCharacter - this.state.charactersPerPage;

    const currentCharacters = characters.slice(
      indexOfFirstCharacter,
      indexOfLastCharacter
    );

    // Change page
    const paginate = pageNumber => this.setState({ currentPage: pageNumber });

    return (
      <div>
        <br />
        <h1 className="text-center">Ice and fire characters</h1>
        <br />
        <Searchable elements={this.state.characters} />
        <div>
          <Characters
            characters={currentCharacters}
            loading={this.state.isLoading}
          />
        </div>
        <Pagination
          paginate={paginate}
          pageCount={pageCount}
          isLoading={isLoading}
        />
      </div>
    );
  }
}

export default CharactersTablePage;
