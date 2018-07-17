import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Auth from '../../lib/Auth';

class ItemsShow extends React.Component {

  constructor() {
    super();
    this.state = {
      data: {
        content: ''
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


  handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: `/api/items/${this.props.match.params.id}/comments`,
      method: 'POST',
      data: this.state,
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => this.props.history.replace(`/items/${this.props.match.params.id}`));
  }

  handleChange = ({ target: { name, value }}) => {
    this.setState({ [name]: value });
  }

  deleteComment = (id) => {
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
                <div className="content-salePitch">
                  <h2 className="title">Sale Description</h2>
                  <h2 className="title">{this.state.item.salePitch}</h2>
                </div>
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
            <div className="media-content-comments">
              <div className="content">
                <form onSubmit={this.handleSubmit}>
                  <div className="field">
                    <label className="label">Leave a comment for the seller</label>
                    <textarea className="textarea" name="content" placeholder="Write a comment" onChange={this.handleChange}/>
                  </div>
                  <button className="button success">Send</button>
                </form>
              </div>
              <div className="content">
                {this.state.item.comments.map((comment) =>
                  <div key={comment._id}>
                    {comment.author}
                    {comment.content}
                    <div className="media-right">
                      <button onClick={() => this.deleteComment(comment._id)} className="delete"></button>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </article>
        </div>
        {/* product detail */}
        <div className="column is-half">
          <div className="content-itemdes">
            <h2 className="title">{this.state.item.designerName}</h2>
            <hr />
            <h3 className="title">{this.state.item.itemDescription}</h3>
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
