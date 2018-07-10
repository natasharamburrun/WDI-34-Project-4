import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Home from './components/pages/Home';
// import About from './components/pages/About';
import ItemsIndex from './components/Items/Index';
import Navbar from './components/common/Navbar';

import 'bulma';
import './scss/style.scss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Navbar />
          {/* <Route exact path="/" component={Home}/> */}
          <section className="section">
            <div className="container">
              <Switch>
                <Route path="/items" component={ItemsIndex} />
                {/* <Route exact path="/" component={About}/> */}
              </Switch>
            </div>
          </section>
        </main>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
