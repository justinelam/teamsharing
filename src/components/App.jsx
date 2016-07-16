import React from 'react';
import ReactDOM from 'react-dom';
import Person from './Person.jsx';
import Header from './Header.jsx';
import Nav from './Nav.jsx';
import NotFound from './NotFound.jsx';
import Questions from './Questions.jsx';
import AddQuestion from './AddQuestion.jsx';
import Question from './Question.jsx';
import Vote from './Vote.jsx';

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
      </div>
    )
  }
});

var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/person/:name/:id" component={Person}/>
    <Route path="/questions" component={Questions}/>
    <Route path="/questions/new" component={AddQuestion}/>
    <Route path="/questions/submit" component={AddQuestion}/>
    <Route path="/questions/vote" component={Vote}/>
    <Route path="/questions/:id" component={Question}/>
    <Route path="*" component={NotFound}/>
  </Router>
)

ReactDOM.render(routes, document.getElementById('main'));

console.log($);