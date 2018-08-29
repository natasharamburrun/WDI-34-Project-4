import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Auth from '../../lib/Auth';
import CommentForm  from './CommentForm';
import CommentBox  from './CommentBox';

class ItemsShow extends React.Component {

  constructor() {
    super();
    this.state = {
      data: {
        content: '',
        comment: []
      }
    };
  }

  componentDidMount(){
    axios.get(`/api/items/${this.props.match.params.id}`)
      .then(res => this.setState({ item: res.data }))
      .catch(err => this.setState({ error: err.message }));
  }

  handleToggle = () => {
    this.setState({ deletePressed: !this.state.deletePressed });
  }

  handleDelete = () => {
    axios({
      url: `/api/items/${this.props.match.params.id}`,
      method: 'DELETE',
      headers: {Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => this.props.history.push('/items'));
  }


  commentCreate = (e) => {
    e.preventDefault();
    e.target.reset();
    axios({
      url: `/api/items/${this.props.match.params.id}/comments`,
      method: 'POST',
      data: this.state,
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => this.setState({ item: res.data }));
  }

  handleCommentChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleCommentDelete = (id) => {
    axios({
      url: `/api/items/${this.props.match.params.id}/comments/${id}`,
      method: 'DELETE'
    })
      .then(res => this.setState({ item: res.data }));
  }


  render() {
    console.log('item', this.state.item);
    if(this.state.error) return <h2 className="title is-2">{this.state.error}</h2>;
    if(!this.state.item) return <h2 className="title is-2">Loading...</h2>;
    return (
      <div className="columns">
        {/* Items picture */}
        <div className="column is-half-desktop is-half-tablet">
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
                <p>ABOUT THE SELLER:</p>
                <p className="title is-4">{this.state.item.user.username}</p>
                <div className="content-salePitch">
                  <h2 className="title"><strong>Sale Description:</strong> {this.state.item.salePitch}</h2>
                </div>
              </div>
            </div>
          </div>
          <hr/>
          <div className="comment-content">
            <div className="media-content">
              <CommentForm
                handleCommentChange={this.handleCommentChange}
                commentCreate={this.commentCreate}
                handleCommentDelete={this.handleCommentDelete}
              />
              <CommentBox
                data={this.state}
                handleCommentDelete={this.handleCommentDelete}
              />
            </div>
          </div>
        </div>
        <hr/>
        {/* product detail */}
        <div className="column is-half-desktop is-half-tablet">
          <div className="content-itemdes">
            <h2 className="title">{this.state.item.designerName}</h2>
            <hr />
            <h2 className="title">{this.state.item.itemDescription}</h2>
            <h2 className="title">£{this.state.item.price}</h2>
            <Link className="button is-black" to={`/items/${this.state.item._id}/checkout`}>Buy Now</Link>
          </div>
          <hr />
          <div className="content-detail">
            <h5 className="title">Product description</h5>
            <h4 className="title">Size: {this.state.item.size}</h4>
            <h4 className="title">rrp: {this.state.item.rrp}</h4>
            <h4 className="title">Condition: {this.state.item.condition}</h4>
            <h4 className="title">Material: {this.state.item.material}</h4>
            <h4 className="title">Colour: {this.state.item.colour}</h4>
          </div>
          <hr />
          <div className="content-delivery">
            <h5 className="title is-5">Delivery</h5>
            <h4 className="title">{this.state.item.shipping}</h4>
            <hr />
          </div>
          {/* Delete sale */}
          <article className="admin">
            <div className="deleteitem">
              {!this.state.deletePressed ? (
                <div className="content">
                  {Auth.getPayload().sub === this.state.item.user._id && <Link to={`/items/${this.state.item._id}/edit`}>Edit sale</Link>}
                  <br />
                  {Auth.getPayload().sub === this.state.item.user._id && <button onClick={this.handleToggle}>Cancel Sale</button>}
                </div>
              ) : (
                <div className="del">
                  <button onClick={this.handleDelete} className="button">Confirm</button>
                  {' '}
                  <button onClick={this.handleToggle} className="button">Cancel</button>
                </div>
              )}
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default ItemsShow;
