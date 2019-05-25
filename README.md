# Bootcamp Web UI - Globant Tucumán


## INSTRUCCIONES.

1. Instalar react-router-dom
	- npm install react-router-dom
	- documentación https://reacttraining.com/react-router/web/guides/quick-start
2. Archivo Routes.
   - Compomente Home 
   - Componente Detail
3. Etiqueta Link, Switch, Routes
   ## Route: es la función que nos permite manejar en linkeo, debemos indicarle:
      - path: Url a la cual va a apuntar. 
      - component: el componente que se renderizará cuando haga match en la ruta
      - opcionalmente podemos indicarle un exact, para que sea un string === string para matchear.
   ## Switch
    // Switch es similar al switch condicional, itera sobre las routes hasta encontrar con quien matchear. 
    // En caso de no matchear con ninguna podemos forzar a mandarlo a una pagina de error nuestra.
   
   ## Link
    // Link es el componente que le va a indicar internamente al componente de BroserRoute que componente renderizar para generar la navegación en formato SPA. 
    // Reemplaza a los <a href="#!"> link </a> que utilicemos en la app, esto generará que no se recargue nuevamente la pagina sino que se rendericen componentes.
