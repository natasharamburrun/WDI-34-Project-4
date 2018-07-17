import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class BagsIndex extends React.Component {

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

  filterItems = () => {
    this.state.items.filter(item => {
      return item.category;
    });
  }

  render(){
    return(
      <section className="section-fullpage">
        <div className="container-content">
          <div className="columns is-multiline">

            {this.state.items().map(item =>
              <div key={item._id} className="column is-one-quarter-desktop is-half-tablet">

                <Link to={`/items/${item._id}`}>

                  <div className="card">
                    <div className="card-image">
                      <figure className="image">
                        <img src={item.image} />
                      </figure>
                    </div>

                    <div className="card-content">
                      <div className="content">
                        <h2 className="title">{item.designerName}</h2>
                        <h2 className="title">{item.itemDescription}</h2>
                      </div>
                      <div className="card-content">
                        <h2 className="title">Size: {item.size}</h2>
                        <h2 className="title">£{item.price}</h2>
                        <h2 className="title">RRP: {item.rrp}</h2>
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

export default BagsIndex;
