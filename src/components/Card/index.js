import React from 'react';
import { Link } from 'react-router-dom';

const styles = { //Styled Component!
  content: {
    textAlign: 'center',
  }
};
const Card = ({ name, id }) =>(
  <div className="col m6">
    <div className="card horizontal">
        <div className="card-stacked">
          <div className="card-content" style={styles.content}>
            <Link to={`/pokemon/${id}`} >
              <h2> { name } </h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
)

export default Card;