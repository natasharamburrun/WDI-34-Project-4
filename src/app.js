import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ItemsIndex from './components/Items/Index';
import ItemsShow from './components/Items/Show';
import Header from './components/common/Header';

import 'bulma';
import './scss/style.scss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Header />
          <Route exact path="/" component={Home}/>
          <section className="section">
            <div className="container">
              <Switch>
                <Route path="/items/:id" component={ItemsShow} />
                <Route path="/items" component={ItemsIndex} />
                <Route exact path="/about" component={About}/>
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
