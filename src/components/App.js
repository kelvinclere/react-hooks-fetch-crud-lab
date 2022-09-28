import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

    // Fetching Data & Setting it to questions
    useEffect(()=> {
      fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((quizes) => setQuestions(quizes))
    },[])

     //Delete Item
  function handleDeleteItem(deleteItem){
    const updatedQuestions = questions.filter((question) => question.id !== deleteItem.id);
    setQuestions(updatedQuestions)
  }


  //function add question
  function addQuestion(item){
    const newQuestions = [...questions, item]
    setQuestions(newQuestions)
    console.log("added", item)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm addQuestion={addQuestion}/> : <QuestionList handleDeleteItem={handleDeleteItem}/>}
    </main>
  );
}

export default App;
