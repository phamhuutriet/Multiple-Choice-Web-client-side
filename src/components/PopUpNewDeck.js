import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { createNewDeck, createNewDeckTemp } from "../redux/actions/actions";
import "./Popup.css";

function PopUpNewDeck(props) {
  const userInfo = useSelector((state) => state.userInfo);
  const [deckName, setDeckName] = useState("");
  const dispatch = useDispatch();

  const handleOnClose = () => {
    props.setTrigger(() => false);
  };

  const onChangeInputName = (e) => {
    setDeckName(e.target.value);
  };

  const handleOnSubmit = () => {
    dispatch(createNewDeck(userInfo.jwt, userInfo.userId, { name: deckName }));
    handleOnClose();
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => handleOnClose()}>
          close
        </button>
        <input type="text" value={deckName} placeholder="Enter new deck's name" onChange={onChangeInputName} />
        <button className="submit-btn" onClick={() => handleOnSubmit()}>
          submit
        </button>
      </div>
    </div>
  ) : null;
}

export default PopUpNewDeck;
