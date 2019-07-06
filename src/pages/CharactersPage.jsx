import React, { Component } from "react";
import axios from "axios";
import { Jumbotron, Container } from 'react-bootstrap';
import CharacterTable from '../components/CharacterTable'

const CORS_FIX = "https://cors-anywhere.herokuapp.com/";
const HOST = "https://anapioficeandfire.com/api/";
const DEV_HOST = CORS_FIX + HOST;
const BOOK_NUM = 1;
const MAX_FETCH_COUNT = 50;
const PAGE_SIZE = 10;

class CharactersTablePage extends Component {
  constructor() {
    super();
    this.state = { 
      characterUrls: null, 
      characters: [], 
      isLoading: false,
      dataList:[],
      currentPage: 1,
      pageConfig: {
        totalPage: MAX_FETCH_COUNT /PAGE_SIZE//总页码
    }
    };
  }
  
  fetchBook = async () => {
    console.log(`fetching book:${DEV_HOST}`);
    axios
      .get(`${DEV_HOST}books/${BOOK_NUM}`)
      .then(res => {
        const characterUrls = res.data.characters;
        this.setState({ characterUrls: characterUrls });
        this.fetchCharaters();
      })
      .catch(err => {
        console.warn(err);
      });
  };

  fetchCharaters = async () => {
    console.log("fetchCharaters:");
    if (this.state.characterUrls) {
      for (var i = 0; i < MAX_FETCH_COUNT; i++) {
        const characterUrl = this.state.characterUrls[i];
        axios
          .get(`${CORS_FIX}${characterUrl}`)
          .then(res => {
            const character = res.data;
            this.state.characters.push(character);
            this.setState({ characters: this.state.characters, pageCount: Math.ceil(MAX_FETCH_COUNT / PAGE_SIZE)});
            // console.log(this.state.pageCount);
          })
          .catch(err => {
            console.warn(err);
          });
      }
    }
  };
  
  componentDidMount() {
    this.fetchBook();
  }
  render() {
    const characters = this.state.characters;
  
    return (
      <div>
        <Jumbotron fluid>
          <Container>
            <h1>Ice and Fire Characters</h1>
          </Container>
        </Jumbotron>
        <CharacterTable characters={characters}/>
      </div>
    );
  }
}
export default CharactersTablePage;
