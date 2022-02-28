import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";

const defaultColor = "";
const chosenColor = "green";

function ControllerButton({ buttonName, setAttribute, isDefault, setIsDefault }) {
  const [buttonColor, setButtonColor] = useState(defaultColor);

  useEffect(() => {
    if (isDefault) {
      setButtonColor((prev) => defaultColor);
      setAttribute((prev) => false);
    }
  }, [isDefault]);

  const handleOnClick = () => {
    setButtonColor((prev) => (prev == defaultColor ? chosenColor : defaultColor));
    setAttribute((prev) => !prev);
    setIsDefault((prev) => false);
  };

  return (
    <div>
      <Button onClick={() => handleOnClick()} sx={{ mt: 1, mr: 1, color: buttonColor }} variant="outlined">
        {buttonName}
      </Button>
    </div>
  );
}

export default ControllerButton;
