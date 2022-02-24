import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllDeck from "./components/AllDeck";
import Deck from "./components/Deck";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Demo2 from "./components/Test";
import { fetchAllDeck } from "./redux/actions/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllDeck());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <NavBar></NavBar>
                <Home />
              </div>
            }
          />
          <Route
            path="/decks"
            element={
              <div>
                <NavBar />
                <AllDeck />
              </div>
            }
          />
          <Route
            path="/decks/:id"
            element={
              <div>
                <NavBar />
                <Deck />
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
