import React from 'react';
import NavItem from './NavItem.jsx';

var Nav = React.createClass({
  render: function() {
    return (
      <ul>
        <NavItem pageName="question-of-the-week" />
        <NavItem pageName="list-of-questions" />
        <NavItem pageName="profile" />
      </ul>
    )
  }
});

export default Nav;
