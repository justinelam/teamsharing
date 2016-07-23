import React from 'react';

var Question = React.createClass({
  render: function() {
    return (
      <div className="question">
        <h1>This is a Question</h1>
        <p>{this.props.params.id}</p>
      </div>
    )
  }
});

export default Question;
