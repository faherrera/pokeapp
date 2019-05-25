import React from 'react';
import Nav from '../../components/Nav';
import DetailPokemon from '../../containers/DetailPokemon';

const Detail = (props) => {
  return (
    <div className="detail-page">
      <Nav />
      <div className="container">
        <DetailPokemon {...props}/>
      </div>
    </div>
  );
}

export default Detail;