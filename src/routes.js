import React from 'react';
import {Switch, Route} from 'react-router-dom'; //Importamos dos componentes importantes, Switch y Routes.
import Home from './pages/Home'; //Importamos componente HomePage
import Detail from './pages/Detail'; //Importamos componente DetailPage
/*
  ## Route
    //Route es la función que nos permite manejar en linkeo, debemos indicarle:
      - path: Url a la cual va a apuntar. 
      - component: el componente que se renderizará cuando haga match en la ruta
      - opcionalmente podemos indicarle un exact, para que sea un string === string para matchear.

  ## Switch
    // Switch es similar al switch condicional, itera sobre las routes hasta encontrar con quien matchear. 
    // En caso de no matchear con ninguna podemos forzar a mandarlo a una pagina de error nuestra.
*/
const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/pokemon/:idPokemon" component={Detail} />
    <Route path='*' component={ () => <h1> Pagina de error. 404 Not found</h1>} /> {/* En caso de no matchear con ninguno, le genramos una pagina de erro. Podemos renderizarlo desd eun componente exportado o con jsx incrustado. */}
  </Switch>
)

export default Routes;