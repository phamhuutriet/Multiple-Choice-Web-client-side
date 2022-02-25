import { Button } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { updatePriorityScore } from "../../redux/actions/actions";
import Choices from "./Choices";

function Question({ question, deckId, updateQuestion, setIndex }) {
  const [thisQuestion, setQuestion] = useState(question);

  useEffect(() => {
    updateQuestion(thisQuestion);
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
      <Choices
        choices={thisQuestion.choices}
        description={thisQuestion.description}
        setPriority={setPriority}
        setIndex={setIndex}
      />
    </div>
  );
}

export default Question;
