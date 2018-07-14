import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Auth from '../../lib/Auth';

class ItemsShow extends React.Component {

  constructor() {
    super();
    this.state = {
      comments: []
    };
  }

  componentDidMount(){
    axios.get(`/api/items/${this.props.match.params.id}`)
      .then(res => this.setState({ item: res.data }))
      .catch(err => this.setState({ error: err.message }));
  }


  handleDelete = () => {
    axios({
      url: `/api/items/${this.props.match.params.id}`,
      method: 'DELETE',
      headers: {Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => this.props.history.push('/items'));
  }

  createComment() {
    axios({
      url: `/api/items/${this.props.match.params.id}/comments`,
      method: 'POST',
      data: this.state,
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => this.setState({ items: res.data })
      );
  }

  deleteComment() {
    axios({
      url: `/api/items/${this.props.match.params.id}/comments/${this.props.comments._id}`,
      method: 'DELETE'
    })
      .then(() => this.props.history.push('/items'));

  }

  render() {
    console.log(this.state.item);
    if(this.state.error) return <h2 className="title is-2">{this.state.error}</h2>;
    if(!this.state.item) return <h2 className="title is-2">Loading...</h2>;
    return (
      <div className="columns">

        {/* Items picture */}
        <div className="column is-half">
          <figure className="image is-square">
            <img src={this.state.item.image} />
          </figure>
          <hr />
          {/* profile */}
          <div className="card-content-profile">
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
              <div className="content">
                Lorsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
              </div>
            </div>
          </div>
          <hr/>
          {/* comments */}
          <article className="media">
            {/* <figure className="media-left">
            <p className="image is-64x64">
            <img src={this.state.item.comments.image} />
          </p>
        </figure> */}
            <div  className="media-content">
              <div className="content">
                <div className="field">
                  <label className="label">Leave a comment for the seller</label>
                  <textarea className="textarea"></textarea>
                  <button className="button is-primary">Submit</button>
                </div>
                <div className="content">
                  <h4 className="title">{this.state.item.comments.author}</h4>
                  <strong>{this.state.item.comments.content}</strong>
                </div>
                <div className="media-right">
                  <button className="delete"></button>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* *****rightside of the page******  */}

        <div className="column is-half">
          <div className="content-itemdes">
            <h2 className="title">{this.state.item.designerName}</h2>
            <hr />
            <h3 className="title">{this.state.item.itemDescription}</h3>
            <h2 className="title">£{this.state.item.price}</h2>
            <Link className="button is-black" to={`/items/${this.state.item._id}/checkout`}>Buy Now</Link>
          </div>
          <hr />
          {/* <div className="card"> */}
          <div className="content-detail">
            <h5 className="title">Product description</h5>
            <h4 className="title">Item: {this.state.item.itemCategory}</h4>
            <h4 className="title">Size: {this.state.item.size}</h4>
            <h4 className="title">rrp: {this.state.item.rrp}</h4>
            <h4 className="title">Condition: {this.state.item.condition}</h4>
            <h4 className="title">Material: {this.state.item.material}</h4>
            <h4 className="title">Colour: {this.state.item.colour}</h4>
          </div>
          {/* </div> */}
          <hr />
          <div className="content-delivery">
            <h5 className="title is-5">Delivery</h5>
            <ul>
              <li>Hermes £2.79</li>
              <li>Royal Mail Standard 2nd Class £2.95</li>
              <li>Royal Mail Signed 2nd Class £3.95</li>
            </ul>
            <hr />

          </div>
          <div className="content-admin">
            <h5 className="title is-5">Admin</h5>
            <Link className="button" to={`/items/${this.state.item._id}/edit`}>Edit</Link><br/>
            <button className="button is-danger" onClick={this.handleDelete}>Delete</button>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

export default ItemsShow;
