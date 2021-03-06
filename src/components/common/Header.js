import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Auth from '../../lib/Auth';

class Header extends React.Component {
  state = {
    navbarOpen: false
  }

  toggleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ navbarOpen: false });
    }
  }

  logout = () => {
    Auth.logout();
    this.props.history.push('/');
  }
  render() {
    return (
      <section className="hero is-small">
        {/* Hero Navbar head*/}
        <div className="hero-head">
          <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <a role="button"
                className={`navbar-burger${this.state.navbarOpen ? ' is-active' : ''}`}
                aria-label="menu"
                aria-expanded="false"
                onClick={this.toggleNavbar}
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
            <div className={`navbar-menu${this.state.navbarOpen ? ' is-active' : ''}`}>
              <div className="navbar-start">
                <Link to="/" className="navbar-item">Home</Link>
                <Link to="/about" className="navbar-item">About</Link>
                {Auth.isAuthenticated() && <Link to="/items/new" className="navbar-item">Sell now</Link>}
              </div>

              <div className="navbar-end">
                {Auth.isAuthenticated() && <Link to="/users/" className="navbar-item">Members</Link>}

                {Auth.isAuthenticated() && <Link to={`/users/${Auth.getPayload().sub}`}className="navbar-item">Profile</Link>}

                {Auth.isAuthenticated() && <Link to={`/users/${Auth.getPayload().sub}/edit`} className="navbar-item">Account</Link>}

                {/* {!Auth.isAuthenticated() && <Link to="/login" className="navbar-item">Login</Link>} */}
                {Auth.isAuthenticated() && <a onClick={this.logout} className="navbar-item">Logout</a>}
                {/* {!Auth.isAuthenticated() && <Link to="/register" className="navbar-item">Register</Link>} */}
              </div>
            </div>
          </nav>
        </div>
        {/* Hero content: will be in the middle  */}
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">
              Designer MarketPlace
            </h1>
          </div>
        </div>
        {/* Hero footer: will stick at the bottom */}
        <div className="hero-foot">
          <nav className="tabs is-boxed is-fullwidth">
            <div className="container">
              <ul>
                {Auth.isAuthenticated() && <li><Link to="/items" className="is-active">All categories</Link></li>}
                {Auth.isAuthenticated() && <li><Link to="/items/categories/Clothes" className="is-active">Clothes</Link></li>}
                {Auth.isAuthenticated() && <li><Link to="/items/categories/Bags" className="is-active">Bags</Link></li>}
                {Auth.isAuthenticated() && <li><Link to="/items/categories/Shoes" className="is-active">Shoes</Link></li>}
                {Auth.isAuthenticated() && <li><Link to="/items/categories/Accessories" className="is-active">Accessories</Link></li>}
              </ul>
            </div>
          </nav>
          <hr/>
        </div>
      </section>
    );
  }
}
export default withRouter(Header);
