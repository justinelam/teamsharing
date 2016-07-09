import React from 'react';
import ReactDOM from 'react-dom';
import Person from './Person.jsx';

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Person name="Jon"/>
        <Person name="Kelly"/>
      </div>
    )
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
