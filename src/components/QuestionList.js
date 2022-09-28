import React from "react";
import QuestionItem  from "./QuestionItem";

function QuestionList({handleDeleteItem, questions}) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
      {questions.map((quiz) => <QuestionItem key={quiz.id} question={quiz} handleDeleteItem={handleDeleteItem}/>)}
      </ul>
    </section>
  );
}

export default QuestionList;
