import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import _ from 'lodash';


class ItemsIndex extends React.Component {

  constructor() {
    super();
    this.state = {
      items: [],
      sort: 'name|asc'
    };
  }

  componentDidMount() {
    axios.get('/api/items')
      .then(res => this.setState({ items: res.data }));
  }

  handleSearch = (e) => {
    this.setState({ search: e.target.value });
  }

  filteredItems = (items) => {
    const re = new RegExp(this.state.search, 'i');
    return items.filter(item => {
      return re.test(item.designerName);
    });

  }

  handleSort = (e) => {
    this.setState({ sort: e.target.value });
  }

  sortedItems = (items) => {
    const [ prop, dir ] = this.state.sort.split('|');
    return _.orderBy(items, prop, dir);
  }

  sortedAndFilteredItems = () => {
    const filtered = this.filteredItems(this.state.items);
    return this.sortedItems(filtered);
  }

  render(){
    return(
      <section className="section-fullpage">
        <div className="container-search">
          {/* searchbar */}
          <div className="filters">
            <input className="input" placeholder="search" onChange={this.handleSearch} />
          </div>
          <div className="control">
            <div className="select">
              <select onChange={this.handleSort}>
                <option value="name | asc">Name (A-Z)</option>
                <option value="name | desc">Name (Z-A)</option>
              </select>
            </div>
          </div>
        </div>
        <div className="container-content">
          <div className="columns is-multiline">
            {this.sortedAndFilteredItems().map(item =>
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
                        <h2 className="title name">{item.designerName}</h2>
                        <h2 className="title description">{item.itemDescription}</h2>
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

export default ItemsIndex;
