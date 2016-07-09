import React from 'react';
import ReactDOM from 'react-dom';
import Person from './Person.jsx';
import Header from './Header.jsx';
import Nav from './Nav.jsx';

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <Nav />
        <Person name="Person name"/>
      </div>
    )
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
