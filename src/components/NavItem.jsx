import React from 'react';

var NavItem = React.createClass({
  render: function() {
    return (
      <li><a href={this.props.pageName}>{this.props.pageName}</a></li>
    )
  }
});

export default NavItem;
