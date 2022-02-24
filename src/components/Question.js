import { Button } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { updatePriorityScore } from "../redux/actions/actions";

function Question({ question, deckId }) {
  const [thisQuestion, setQuestion] = useState(question);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeValue = (e) => {
    if (e.target.value === "true") {
      setQuestion({
        ...thisQuestion,
        priorityScore: question.priorityScore - 1,
      });
    } else {
      setQuestion({
        ...thisQuestion,
        priorityScore: question.priorityScore + 1,
      });
    }
  };

  const onSubmit = (e) => {
    console.log(thisQuestion.priorityScore);
    dispatch(updatePriorityScore(thisQuestion, deckId));
    navigate("/");
  };

  console.log(thisQuestion.priorityScore);

  return (
    <div>
      <h3>{thisQuestion.description}</h3>
      <form onSubmit={onSubmit}>
        <label>
          <input
            type="radio"
            key={thisQuestion.choices[0].id}
            name="multiple-choice"
            value={thisQuestion.choices[0].isAnswer}
            onChange={onChangeValue}
          />{" "}
          {thisQuestion.choices[0].body}
        </label>
        <br />
        <label>
          <input
            type="radio"
            key={thisQuestion.choices[1].id}
            name="multiple-choice"
            value={thisQuestion.choices[1].isAnswer}
            onChange={onChangeValue}
          />{" "}
          {thisQuestion.choices[1].body}
        </label>
        <br />
        <label>
          <input
            type="radio"
            key={thisQuestion.choices[2].id}
            name="multiple-choice"
            value={thisQuestion.choices[2].isAnswer}
            onChange={onChangeValue}
          />{" "}
          {thisQuestion.choices[2].body}
        </label>
        <br />
        <label>
          <input
            type="radio"
            key={thisQuestion.choices[3].id}
            name="multiple-choice"
            value={thisQuestion.choices[3].isAnswer}
            onChange={onChangeValue}
          />{" "}
          {thisQuestion.choices[3].body}
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Question;
