import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class ItemsShow extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    axios({
      url: `/api/items/${this.props.match.params.id}`,
      method: 'GET'
    })
      .then(res => this.setState({ item: res.data }));
  }

  handleDelete = () => {
    axios({
      url: `/api/items/${this. props.match.params.id}`,
      method: 'DELETE'
      // headers: {Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => this.props.history.push('/criminals'));
  };

  render() {
    // if(this.state.error) return <h2 className="title is-2">{this.state.error}</h2>;
    if(!this.state.item) return <h2 className="title is-2">Loading...</h2>;
    return (
      <div className="columns">
        <div className="column is-half">
          <figure className="image">
            <img src={this.state.item.image} />
          </figure>
        </div>
        <div className="column is-half">
          <h2 className="title">{this.state.item.designerName}</h2>
          <hr />

          <Link className="button" to={`/items/${this.state.item._id}/edit`}>Edit</Link>
          <button className="button is-danger" onClick={this.handleDelete}>Delete</button>
        </div>
      </div>
    );
  }
}

export default ItemsShow;
