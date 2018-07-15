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
          <div className="columns is-multiline">
            {this.state.users.map(user =>
              <div key={user._id} className="column is-one-third-desktop is-half-tablet">
                {Auth.isAuthenticated() && <Link to={`/users/${user._id}`}>
                  <div className="card">
                    <div className="card-image">
                      <figure className="image">
                        <img src={user.image} />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="content">
                        <h2 className="title">{user.username}</h2>
                      </div>
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
