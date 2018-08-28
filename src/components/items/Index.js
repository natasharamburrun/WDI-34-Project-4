import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
// import _ from 'lodash';


class ItemsIndex extends React.Component {

  constructor() {
    super();
    this.state = {
      items: [],
      // sort: 'name|asc',
      category: ''
    };
  }


  //if there is a category then this will setstate to match cat
  componentDidUpdate() {
    if(this.state.category !== this.props.match.params.category) {
      this.setState({ category: this.props.match.params.category });
    }
  }

  componentDidMount() {
    axios.get('/api/items')
      .then(res => this.setState({ items: res.data }));
  }
  //function which allows you to search by the designer name
  handleSearch = (e) => {
    this.setState({ search: e.target.value });
  }
  //filter the items on the pages by designerName
  filteredItems = (items) => {
    const re = new RegExp(this.state.search, 'i');
    return items.filter(item => re.test(item.designerName));
  }

  //filters the category into tabs in the header
  filterByCategory = (items) => {
    return this.state.category ? items.filter(item => item.category === this.state.category) : items;
  }

  sortedAndFilteredItems = () => {
    const filtered = this.filteredItems(this.state.items);
    return this.filterByCategory(filtered);
  }

  render(){
    return(
      <section className="section-fullpage">
        <div className="container-search">
          <input className="input" placeholder="Search by Brand" onChange={this.handleSearch} />
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
                      <br/>
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
