import React from 'react';
import ReactDOM from 'react-dom';
import Person from './Person.jsx';
import Header from './Header.jsx';
import Nav from './Nav.jsx';
import NotFound from './NotFound.jsx';

var ReactRouter = require('react-router');
var Router  = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;
import browserHistory from 'react-router'
import hashHistory from 'react-router'

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <Nav />
        <Person />
      </div>
    )
  }
});

var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/person/:name/:id" component={Person}/>
    <Route path="*" component={NotFound}/>
  </Router>
)

ReactDOM.render(routes, document.getElementById('main'));
