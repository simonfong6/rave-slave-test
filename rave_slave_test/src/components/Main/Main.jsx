import React from 'react';
import Question from '../Question';
import './Main.css';


function Main() {
  return (
    <div>
      <h1 class="title">Rave Slave Test</h1>
      <Question
        question="Have you ever been to rave?"
      />
    </div>
  );
}

export default Main;
