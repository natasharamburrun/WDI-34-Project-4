import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';


class UsersShow extends React.Component {

  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
    axios({
      url: `/api/users/${this.props.match.params.id}`,
      method: 'GET'
    })
      .then(res => this.setState({ users: res.data }))
      .catch(err => this.setState({ error: err.message }));
  }

  handleDelete = () => {
    axios({
      url: `/api/users/${this.props.match.params.id}`,
      method: 'DELETE',
      headers: {Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => this.props.history.push('/users'));
  }


  render() {
    if(this.state.error) return <h2 className="title is-2">{this.state.error}</h2>;
    if(!this.state.user) return <h2 className="title is-2">Loading...</h2>;
    return (
      <section className="user-show">
        <section className="hero is-primary">
          <div className="hero-body">
            <figure className="media-content-image">
              <p className="image is-128x128">
                <img src="{this.state.user.image}" />
              </p>
            </figure>
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <p>
                    <h2 className="title">{this.state.user.username}</h2>
                    <h2 className="title">{this.state.user.email}</h2>
                    <h2 className="title">{this.state.user.bio}</h2>
                  </p>
                </div>
              </div>
            </article>
            <div className="media-right">
              <Link className="button" to={`/cupcakes/${this.state.cupcake._id}/edit`}>Edit</Link>
              <button className="button is-danger" onClick={this.handleDelete}>Delete</button>
            </div>
          </div>
        </section>
      </section>
    );
  }
}
export default UsersShow;
