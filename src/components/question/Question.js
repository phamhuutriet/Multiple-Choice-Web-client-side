import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updatePriorityScore } from "../../redux/actions/actions";
import Choices from "./Choices";

function Question({ question, deckId }) {
  const [thisQuestion, setQuestion] = useState(question);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updatePriorityScore(thisQuestion, deckId));
  }, [thisQuestion]);

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

  return (
    <div>
      <h3>{thisQuestion.description}</h3>
      <Choices choices={thisQuestion.choices} setPriority={setPriority} />
    </div>
  );
}

export default Question;
