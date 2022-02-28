import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import * as api from "../../../api/index";
import QuestionInfo from "./QuestionInfo";

function AllQuestion() {
  const { id } = useParams();
  const [questions, setQuestions] = useState([]);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api.fetchDeckQuestionById(id);
      setQuestions((prev) => data);
    };
    fetchData();
  }, [rerender]);

  console.log(rerender);

  return (
    <div>
      {questions.length == 0 ? (
        <h3>You don't have any questions</h3>
      ) : (
        <div>
          {questions.map((question, idx) => {
            return <QuestionInfo key={idx} question={question} deckId={id} setRerender={setRerender} />;
          })}
        </div>
      )}
    </div>
  );
}

export default AllQuestion;
