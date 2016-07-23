import React from 'react';

var NavItem = React.createClass({
  render: function() {
    return (
      <li><a href={this.props.path}>{this.props.pageName}</a></li>
    )
  }
});

export default NavItem;
