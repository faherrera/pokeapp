class PokeApiService{
  constructor(){
    this.apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
  }
  
  async getAllPokemon(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const data = await response.json();
    return data;
  }
  
  async getPokemonById(id){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    return data;
  }
}

const _instance = new PokeApiService();
export default _instance;