import React, { useState, useEffect } from "react";
import Characters from "../components/Characters";
import Pagination from "../components/Pagination";
import axios from "axios";

const CORS_FIX = "https://cors-anywhere.herokuapp.com/";
const HOST = "https://anapioficeandfire.com/api/";
const DEV_HOST = CORS_FIX + HOST;
const BOOK_NUM = 1;
const MAX_FETCH_COUNT = 50;
const PAGE_SIZE = 10;

const CharactersPaginationPage = () => {
  const [characters, setCharacters] = useState([]);
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(10);

  useEffect(() => {
    const fetchbook = async () => {
      setLoading(true);
      const res = await axios.get(`${DEV_HOST}books/${BOOK_NUM}`);
      const urls = res.data.characters.slice(0,MAX_FETCH_COUNT-1).sort();
      setCharacters(urls);
      setLoading(false);
    };  
    fetchbook();
     
  
  });

  const fetchCharacters = async () => {
        if (urls) {
            for (var i = 0; i < MAX_FETCH_COUNT; i++) {
              const characterUrl = urls[i];
              console.log(characterUrl);
            //   axios
            //     .get(`${characterUrl}`)
            //     .then(res => {
            //       const characterRes = res.data;
            //       characters.push(characterRes);
            //       setCharacters(characters);
            //     // setCharacters(res.data);
            //     //   this.setState({ characters: this.state.characters});
            //     })
            //     .catch(err => {
            //       console.warn(err);
            //     });
            }
          }
    }

  // Get current character
  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = characters.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">Ice and fire</h1>
      <Characters characters={currentCharacters} loading={loading} />
      <Pagination
        charactersPerPage={charactersPerPage}
        totalCharacters={characters.length}
        paginate={paginate}
      />
    </div>
  );
};

export default CharactersPaginationPage;
