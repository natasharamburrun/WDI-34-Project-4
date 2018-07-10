import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class ItemsIndex extends React.Component {

  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    axios.get('/api/items')
      .then(res => this.setState({ items: res.data }));
  }

  render(){
    return(
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.items.map(item =>
              <div key={item._id} className="column is-one-third-desktop is-half-tablet">

                <Link to={`/items/${item._id}`}>

                  <div className="card">
                    <div className="card-image">
                      <figure className="image">
                        <img src={item.image} />
                      </figure>
                    </div>

                    <div className="card-content">
                      <div className="content">
                        <h2 className="title">{item.name}</h2>
                      </div>
                    </div>
                  </div>

                </Link>

              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

}

export default ItemsIndex;
