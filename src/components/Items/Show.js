import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Auth from '../../lib/Auth';

class ItemsShow extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount(){
    axios.get(`/api/items/${this.props.match.params.id}`)
      .then(res => this.setState({ item: res.data }))
      .catch(err => this.setState({ error: err.message }));
  }

  handleDelete = () => {
    axios({
      url: `/api/items/${this. props.match.params.id}`,
      method: 'DELETE',
      headers: {Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => this.props.history.push('/items'));
  };

  render() {
    console.log(this.state.item);
    if(this.state.error) return <h2 className="title is-2">{this.state.error}</h2>;
    if(!this.state.item) return <h2 className="title is-2">Loading...</h2>;
    return (
      <div className="columns">

        {/* *****leftside of the page***** */}

        <div className="column is-half">
          <figure className="image">
            <img src={this.state.item.image} />
          </figure>
          <hr />
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src={this.state.item.user.image} />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{this.state.item.user.username}</p>
                <p className="subtitle is-6">@johnsmith</p>
              </div>
            </div>
            <div className="content">
            Lorsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris.
            </div>
          </div>
        </div>

        {/* *****rightside of the page******  */}

        <div className="column is-half">
          <div className="content">
            <h2 className="title">{this.state.item.designerName}</h2>
            <hr />
            <h4 className="title">{this.state.item.itemDescription}</h4>
            <h2 className="title">£{this.state.item.price}</h2>
            <Link className="button is-black" to={`/items/${this.state.item._id}/checkout`}>Buy Now</Link>
            <ion-icon is-large name="star">Add to wishlist</ion-icon>
          </div>
          <hr />
          <div className="card">
            <div className="content-mid">
              <h3 className="title is-3">Product description</h3>
              <h4 className="title">Item: {this.state.item.itemCategory}</h4>
              <h4 className="title">Size: {this.state.item.size}</h4>
              <h4 className="title">rrp: {this.state.item.rrp}</h4>
              <h4 className="title">Condition: {this.state.item.condition}</h4>
              <h4 className="title">Material: {this.state.item.material}</h4>
              <h4 className="title">Colour: {this.state.item.colour}</h4>
            </div>
          </div>
          <div className="content-delivery">
            <h3 className="title is-3">Delivery</h3>
            <ul>
              <li>Hermes £2.79</li>
              <li>Royal Mail Standard 2nd Class £2.95</li>
              <li>Royal Mail Signed 2nd Class £3.95</li>
            </ul>
            <hr />
            <Link className="button" to={`/items/${this.state.item._id}/edit`}>Edit</Link>
            <button className="button is-danger" onClick={this.handleDelete}>Delete</button>
            <hr />
            <div className="comments">
            </div>

            {/* **************ADD COMMENTS**************** */}
          </div>
        </div>
      </div>
    );
  }
}

export default ItemsShow;
