import React from 'react';
import './style.scss';
import Nav from '../../components/Nav';
import ListPokemon from '../../containers/ListPokemon';

const Home = () => {
  return(
    <div className="home-page">
      <Nav />
      <div className="container">
          <ListPokemon />
      </div>
    </div>
  );
}

export default Home;