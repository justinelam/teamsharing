import React from 'react';

var AddQuestion = React.createClass({
  render: function() {
    return (
      <div className="addQuestionForm">
        <h1>Add a question</h1>
        <form>
          <input type="text" />
          <input type="submit" />
        </form>
      </div>
    )
  }
});

export default AddQuestion;
