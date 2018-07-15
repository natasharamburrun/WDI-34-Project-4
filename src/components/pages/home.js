import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class HomeIndex extends React.Component {
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
      <section className="section-homepage">
        <div className="container-content">
          <div className="columns is-multiline">
            {this.state.items.map(item =>
              <div key={item._id} className="column is-one-third-desktop is-half-tablet">
                <Link to={'/register'}>
                  <div className="card is-3by2">
                    <div className="card-image">
                      <figure className="image">
                        <img src={item.image} />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="content">
                        <h2 className="title">{item.designerName}</h2>
                        <h2 className="title">{item.itemDescription}</h2>
                        <h2 className="title">Price: {item.price}</h2>
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

export default HomeIndex;
