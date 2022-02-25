import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { createNewDeck } from "../redux/actions/actions";
import "./Popup.css";

function PopUpNewDeck(props) {
  const [deckName, setDeckName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnClose = () => {
    props.setTrigger(() => false);
  };

  const onChangeInputName = (e) => {
    setDeckName(e.target.value);
  };

  const handleOnSubmit = () => {
    dispatch(createNewDeck({ name: deckName }));
    handleOnClose();
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => handleOnClose()}>
          close
        </button>
        <input
          type="text"
          value={deckName}
          placeholder="Enter new deck's name"
          onChange={onChangeInputName}
        />
        <button className="submit-btn" onClick={() => handleOnSubmit()}>
          submit
        </button>
      </div>
    </div>
  ) : null;
}

export default PopUpNewDeck;
