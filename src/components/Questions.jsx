import React from 'react';

var Questions = React.createClass({
  render: function() {
    return (
      <div class="questions">
        <h1 onClick={this.getQuestions}>This is a Questions page</h1>
      </div>
    )
  },
  getQuestions: function() {
    var questions = $.get('./questions.json', function(data){
      console.log(data);
    });
  }
});

export default Questions;
