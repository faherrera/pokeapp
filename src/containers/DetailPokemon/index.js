import React from 'react';
import CardDetail from '../../components/CardDetail';
import PokemonApiInstance from './../../services/PokeApiService'; //Hacemos uso de la instancia de PokemonService

class DetailPokemon extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      pokemon: {},
      error: null, //Para hacer un ejemplo manejando el error.
    }
  }

  async componentDidMount(){
    ///En este ciclo de vida nosotros obtenemos y usamos las props que vienen del router. 
    //Como recomendación imprimir en consola las propiedades para debuggear todo lo que trae, en este caso nos importan el valor de 'match'.

    const { match } = this.props; //Match nos trae datos importantens, en este caso todos los queryParams
    const { params } = match; //Podemos usar destructuring hasta obtener los params.
    const { idPokemon } = params;

    /*
      Otra manera de usar el destructuring de objetos es 
      const {
        match:{
          params: {
            idPokemon
          }
        }
      } = this.props 
    */

    if (idPokemon.length > 0) { //Si tengo un Id, entonces ejecutar. Podria ser 0 el id por lo que no puedo poner un !idPokemon
      PokemonApiInstance.getPokemonById(idPokemon)
      .then( //Ejemplo Con promesas
        pokemon => {
          this.setState({
            pokemon,
          });
        }
      ).catch(
        error => this.setState({error})
      );
      
    }

  }

  render(){
    const { pokemon, error } = this.state;
    return(
      <div className="detail-pokemon">
        {
          error ? <h1> Ocurrió un errrorr!!!!!! </h1>
          : 
          !pokemon 
          ? <h2> No hay pokemon cargado aún, esperando... </h2>
          : <CardDetail {...pokemon} />
        }
      
      </div>
    );
  }
}

export default DetailPokemon;