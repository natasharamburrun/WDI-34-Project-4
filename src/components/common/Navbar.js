import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class Navbar extends React.Component {

  state = {
    navbarOpen: false
  }

  render() {
    return (
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
          <div className="navbar-end">
            <Link to="/items"  className="navbar-item">Items</Link>
          </div>
        </div>
      </nav>

    );
  }

}
export default withRouter(Navbar);
