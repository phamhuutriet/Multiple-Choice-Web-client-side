import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePriorityScore } from "../../redux/actions/actions";
import Choices from "./Choices";

function Question({ question, deckId, setCompleteQuestions, questionIdx, inCompletedSet, setIndex, handleWrongQuestion, wrongQuestions }) {
  const jwt = useSelector((state) => state.userInfo).jwt;
  const [thisQuestion, setQuestion] = useState(question);
  const dispatch = useDispatch();

  useEffect(() => {
    setQuestion(question);
  }, [question]);

  const setPriority = (sign) => {
    if (sign == "true") {
      setQuestion({
        ...thisQuestion,
        priorityScore: thisQuestion.priorityScore - 1,
      });
    } else {
      setQuestion({
        ...thisQuestion,
        priorityScore: thisQuestion.priorityScore + 1,
      });
    }
  };

  const dispatchPriority = (sign) => {
    if (sign == "true" && !wrongQuestions.has(questionIdx)) {
      dispatch(updatePriorityScore(jwt, { ...thisQuestion, priorityScore: thisQuestion.priorityScore - 1 }, deckId));
    }
  };

  return (
    <div>
      <h3>{thisQuestion.description}</h3>
      <Choices
        choices={thisQuestion.choices}
        setPriority={setPriority}
        setCompleteQuestions={setCompleteQuestions}
        questionIdx={questionIdx}
        inCompletedSet={inCompletedSet}
        dispatchPriority={dispatchPriority}
        setIndex={setIndex}
        handleWrongQuestion={handleWrongQuestion}
      />
    </div>
  );
}

export default Question;
