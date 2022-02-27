import React from "react";
import Button from "@mui/material/Button";

function LearnController() {
  return (
    <div>
      <Button sx={{ mt: 1, mr: 1 }} variant="outlined">
        SHUFFLE QUESTIONS
      </Button>
      <Button sx={{ mt: 1, mr: 1 }} variant="outlined">
        SHUFFLE CHOICES
      </Button>
      <Button sx={{ mt: 1, mr: 1 }} variant="outlined">
        DEFAULT
      </Button>
    </div>
  );
}

export default LearnController;
