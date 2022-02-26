import React from "react";
import { useState } from "react";
import Answer from "./Answer";
import Description from "./Description";
import NumAnswerSelect from "./NumAnswerSelect";
import Button from "@mui/material/Button";

export default function AddQuestion() {
  const [description, setDescription] = useState("");
  const [numAnswer, setNumAnswer] = React.useState(0);

  console.log(description);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Add Question</h2>
      <Description setDescription={setDescription} description={description} />

      <div>
        <h4> Number of Answers </h4>
        <NumAnswerSelect numAnswer={numAnswer} setNumAnswer={setNumAnswer} />
      </div>

      {[...Array(numAnswer)].map((e, i) => (
        <div key={i}>
          <Answer />
          <br />
        </div>
      ))}

      <Button sx={{ mt: 1, mr: 1 }} variant="outlined">
        SUBMIT
      </Button>
    </div>
  );
}
