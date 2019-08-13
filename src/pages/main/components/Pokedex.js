import React from 'react';

const Pokedex = ({ pokemons }) => {
  return (
    <div className="main-container">
      <ul>
        {pokemons.map(pkm => (
          <li key={pkm.id}>
            <img src={pkm.imgUrl} alt={pkm.imgTitle} />
            <footer>
              <img src={pkm.imgIcon} alt={pkm.name} className="img-icon" />
              <a href={pkm.link} rel="noopener noreferrer" target="_blank">{pkm.name}</a>
            </footer>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pokedex;

