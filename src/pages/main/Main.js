import React, { useState, useEffect } from 'react';
import api, { pokeApi } from '../../services/api';
import Pagination from './components/Pagination';
import Pokedex from './components/Pokedex';

import './Main.css';

export default function Main() {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  const apiKey = "&api_key=609CKYEv3LW6hYOLKWfVLsw63IrkhaE4";
  const pokeTotal= 151;

  useEffect(() => {
    async function newPoke() {
      for (let i = 1; i <= pokeTotal; i++){
        const response = await pokeApi.get('/' + i);
        const res = await api.get(response.data.name + apiKey + '&limit=1');
        
        await setPokemons(pokemons => [...pokemons,{
            id: response.data.id,
            name: response.data.name,
            imgUrl: res.data.data[0].images.downsized.url,
            imgTitle: res.data.data[0].title,
            imgIcon: response.data.sprites.front_default,
            link: 'https://pokemondb.net/pokedex/' + response.data.name,
          }]);
      }
    };
    newPoke(); 
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = pokemons.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (    
    <div className='container'>
      <Pokedex pokemons={currentPosts}/>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={pokemons.length}
        paginate={paginate}
      />
    </div>
  );
}