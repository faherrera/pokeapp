import React from 'react';
import Card from '../../components/Card';
import pokemonService from './../../services/PokeApiService';

class ListPokemon extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      list : [],
    }
  }
  
  async componentDidMount(){
    const response = await pokemonService.getAllPokemon();
    const list = response.results;
    const newList = list.map( (item) => {
        const id = item.url.split('/')[6];
        item.id = id;
        return item;
    })

    this.setState({
      list:newList,
    });

  }
  
  render(){
    const { list } = this.state;
    return(
      <div className="list-pokemon">
        <h2> Mis pokemons {list.length}</h2>
        <div className="row">
          {
            list.map( (item, index) => <Card key={item.id} {...item}/>)
          }
        </div>
      </div>
    );
  }
}

export default ListPokemon;