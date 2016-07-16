import React from 'react';

var Person = React.createClass({
  render: function() {
    return (
      <div onClick={this.handleClick}>
        {this.props.params.name}<br />
        {this.props.params.id}
      </div>
    )
  },

  handleClick: function() {
    console.log(this.props.params.name);
  }
});

export default Person;
