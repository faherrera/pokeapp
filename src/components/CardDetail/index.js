import React from 'react';
import { Link } from 'react-router-dom';

const CardDetail = ({ name, sprites, weight, height}) => ( //Card que va a renderizar los datos que traemos unicamente.
  <div className="card-detail">
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div className="card">
            <div className="card-image">
              <img src={sprites && sprites.front_default} />
            </div>
              <div className="card-content">
                  <ul>
                    <li>
                      <strong> Nombre: </strong> <span> {name}</span>
                    </li>
                    <li>
                      <strong> Weight: </strong> <span> {weight}</span>
                    </li>
                    <li>
                      <strong> Height: </strong> <span> {height}</span>
                    </li>
                  </ul>
              </div>
              <div className="card-action">
                <Link to='/'>
                  Volver al listado
                </Link>
              </div>
            </div>
          </div>
        </div>

    </div>
  </div>
);

export default CardDetail;