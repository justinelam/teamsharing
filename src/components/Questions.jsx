import React from 'react';


var Questions = React.createClass({
  render: function() {
    return (
      <h1 onClick={this.getQuestions}>This is a Questions page</h1>
    )
  },
  getQuestions: function(){
    var questions = $.get('./questions.json', function(){
      console.log(arguments);
    });

  }
});

export default Questions;
