import { Button } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { updatePriorityScore } from "../../redux/actions/actions";
import Choices from "./Choices";

function Question({ question, deckId, updateQuestion }) {
  const [thisQuestion, setQuestion] = useState(question);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setPriority = (sign) => {
    if (sign == "true") {
      setQuestion({
        ...thisQuestion,
        priorityScore: thisQuestion.priorityScore - 1,
      });
      updateQuestion(thisQuestion);
    } else {
      setQuestion({
        ...thisQuestion,
        priorityScore: thisQuestion.priorityScore + 1,
      });
      updateQuestion(thisQuestion);
    }
  };

  const onSubmit = (e) => {
    dispatch(updatePriorityScore(thisQuestion, deckId));
    navigate("/");
  };

  console.log(thisQuestion);

  return (
    <div>
      <h3>{thisQuestion.description}</h3>
      <Choices
        choices={thisQuestion.choices}
        description={thisQuestion.description}
        setPriority={setPriority}
      />
    </div>
  );
}

export default Question;
