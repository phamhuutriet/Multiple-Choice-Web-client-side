import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router";
import ControllerButton from "./ControllerButton";
import DefaultButton from "./DefaultButton";

function LearnController() {
  // INSTANCES
  const { id } = useParams();
  const navigate = useNavigate();

  const [shuffleQuestions, setShuffleQuestions] = useState(false);
  const [shuffleChoices, setShuffleChoices] = useState(false);
  const [sortByPriority, setSortByPriority] = useState(false);
  const [isDefault, setIsDefault] = useState(false);

  // METHODs

  const onClickStart = () => {
    navigate(`/decks/${id}/learn/${shuffleQuestions}/${shuffleChoices}/${sortByPriority}`);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ justifyContent: "center", display: "flex", flexDirection: "row" }}>
        <ControllerButton buttonName="SHUFFLE QUESTIONS" setAttribute={setShuffleQuestions} isDefault={isDefault} setIsDefault={setIsDefault} />
        <ControllerButton buttonName="SHUFFLE CHOICES" setAttribute={setShuffleChoices} isDefault={isDefault} setIsDefault={setIsDefault} />
        <ControllerButton buttonName="PRIORITY" setAttribute={setSortByPriority} isDefault={isDefault} setIsDefault={setIsDefault} />
        <DefaultButton setDefault={setIsDefault} isDefault={isDefault} />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Button onClick={() => onClickStart()} sx={{ mt: 1, mr: 1 }} variant="outlined">
        START
      </Button>
    </div>
  );
}

export default LearnController;
