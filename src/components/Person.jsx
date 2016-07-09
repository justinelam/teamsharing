import React from 'react';

var Person = React.createClass({
  render: function() {
    return (
      <div onClick={this.handleClick}>
        {this.props.name}
      </div>
    )
  },

  handleClick: function() {
    console.log(this.props.name);
  }
});

export default Person;
