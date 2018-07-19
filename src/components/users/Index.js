import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Auth from '../../lib/Auth';

class UsersIndex extends React.Component {

  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios.get('/api/users')
      .then(res => this.setState({ users: res.data }));
  }

  render(){
    return(
      <section className="section-members">
        <div className="container-content">
          <div className="content">
            <h5 className="title">Welcome to the community</h5>
            <h5 className="title">Visit members profiles</h5>
          </div>
          <div className="columns is-multiline">
            {this.state.users.map(user =>
              <div key={user._id} className="column is-one-quarter-desktop is-half-tablet">
                {Auth.isAuthenticated() && <Link to={`/users/${user._id}`}>
                  <div className="card-image-members">
                    <figure className="image">
                      <img src={user.image} />
                    </figure>
                    <div className="content">
                      <h2 className="title">{user.username}</h2>
                    </div>
                  </div>
                </Link>}
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default UsersIndex;
