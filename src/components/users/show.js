import React from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';
// import ReactFilestack from 'filestack-react';

class UsersShow extends React.Component {

    state = {
      user: {}
    };

    componentDidMount(){
      axios.get(`/api/users/${this.props.match.params.id}`)
        .then(res => this.setState({ user: res.data }))
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

  // handleFilestack = (res) => {
  //   const user = { ...this.state.user, image: res.filesUploaded[0].url };
  //   this.setState({ user });
  // }

  // FILESTACK SETTINGS/ FUNCTIONS
// options = {
//   fromSources: ['local_file_system','url','imagesearch','facebook','instagram','googledrive','dropbox','gmail'],
//   accept: ['image/*'],
//   maxFiles: 1,
//   transformations: {
//     crop: {
//       force: true,
//       aspectRatio: 1
//     }
//   }
// };

handleFilestack = (result) => {
  this.setState({ image: result.filesUploaded[0].url });
}


render() {
  if(this.state.error) return <h2 className="title is-2">{this.state.error}</h2>;
  if(!this.state.user) return <h2 className="title is-2">Loading...</h2>;
  return (
    <section className="user-show">
      <figure className="media-content-image">
        <p className="image is-128x128">
          <img src={this.state.user.image} />
        </p>
      </figure>

      {/* <figure className="media-content-image">
          <ReactFilestack
            apikey={'AbEqJmhCVTTmU0EfzPrSoz'}
            options={{
              accept: ['image/*'],
              maxSize: 500 * 500,
              maxFiles: 1
            }}
            onSuccess={res => this.handleFilestack(res)}
            render={({ onPick }) => (
              <div>
                <img src={this.state.filesUploaded} />
                <button onClick={onPick}>Upload Photo</button>
              </div>
            )}
          />
        </figure> */}
      <article className="media">
        <div className="media-content">
          <div className="content">
            <h4 className="title"><strong>{this.state.user.username}</strong></h4>
            <h4 className="title">Bio:<br/>{this.state.user.bio}</h4>
          </div>

          {/* ***********ADD FOLLOWS ************* */}

          {/* ***********ADD FAVOURITE *********** */}

          {/* ***********ADD FOR SALE ITEMS *********** */}
          <div className="media-right">
            {Auth.getPayload().sub === this.state.user._id && <button onClick={this.handleDelete} className="button warning">Delete</button>}
          </div>
        </div>
      </article>
    </section>
  );
}
}
export default UsersShow;
