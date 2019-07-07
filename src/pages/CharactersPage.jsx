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

class CharactersTablePage extends Component {
  constructor() {
    super();
    this.state = {
      urls: [],//array of characters' api urls
      characters: [],//arrary of character objects
      currentPage: ACTIVE,
      charactersPerPage: PAGE_SIZE,
      isLoading: false
    };
  }

  fetchBook = async () => {
    this.setState({ isLoading: true });
    axios
      .get(`${DEV_HOST}books/${BOOK_NUM}`)
      .then(res => {
        const characterUrls = res.data.characters
          .slice(0, MAX_FETCH_COUNT)
          .sort();
        this.setState({ urls: characterUrls });
        this.fetchCharaters();
      })
      .catch(err => {
        console.warn(err);
      });
  };

  fetchCharaters = async () => {
    if (this.state.urls) {
      for (var i = 0; i < MAX_FETCH_COUNT; i++) {
        const characterUrl = this.state.urls[i];
        axios
          .get(`${CORS_FIX}${characterUrl}`)
          .then(res => {
            const character = res.data;
            this.state.characters.push(character);
            this.setState({
              characters: this.state.characters
            });
          })
          .catch(err => {
            console.warn(err);
          });
      }
    }
    this.setState({ isLoading: false });
  };
  
  componentDidMount() {
    this.fetchBook();
  }
  render() {
    const fetchedCharacters = this.state.characters;

    // Get current character
    const indexOfLastCharacter =
      this.state.currentPage * this.state.charactersPerPage;

    const indexOfFirstCharacter =
      indexOfLastCharacter - this.state.charactersPerPage;

    const currentCharacters = fetchedCharacters.slice(
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
        {fetchedCharacters.length == MAX_FETCH_COUNT && (
          <div>
            <Characters
              characters={currentCharacters}
              loading={this.state.isLoading}
            />
          </div>
        )}
        <Pagination
          charactersPerPage={this.state.charactersPerPage}
          totalCharacters={this.state.characters.length}
          paginate={paginate}
        />
      </div>
    );
  }
}

export default CharactersTablePage;
