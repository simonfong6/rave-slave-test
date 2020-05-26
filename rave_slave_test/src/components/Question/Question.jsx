import React from 'react';
import './Question.css';

function Question(props) {
  const {question} = props;

  return (
    <div>
      <input
        className="question"
        type="checkbox"
      />
      {question}
    </div>
  );
}

export default Question;
