import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";

const defaultColor = "";
const chosenColor = "green";

function DefaultButton({ setDefault, isDefault }) {
  const [buttonColor, setButtonColor] = useState(defaultColor);

  useEffect(() => {
    if (!isDefault) {
      setButtonColor((prev) => defaultColor);
    }
  }, [isDefault]);

  const onClickDefault = () => {
    setDefault((prev) => !prev);
    setButtonColor((prev) => (prev == defaultColor ? chosenColor : defaultColor));
  };

  return (
    <div>
      <Button onClick={() => onClickDefault()} sx={{ mt: 1, mr: 1, color: buttonColor }} variant="outlined">
        DEFAULT
      </Button>
    </div>
  );
}

export default DefaultButton;
