import React from 'react';
import NavItem from './NavItem.jsx';

var Nav = React.createClass({
  render: function() {
    return (
      <ul>
        <NavItem pageName="Question of the week" path="/#/questions/current" />
        <NavItem pageName="Past questions" path="/#/questions" />
        <NavItem pageName="Submit new question" path="/#/questions/new" />
        <NavItem pageName="Vote" path="/#/questions/vote" />
        <NavItem pageName="Profile" path="/#/person/1" />
      </ul>
    )
  }
});

export default Nav;
