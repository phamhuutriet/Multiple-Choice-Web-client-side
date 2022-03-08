import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddQuestion from "./components/Deck/AddDeck/AddQuestion";
import AllDeck from "./components/Deck/AllDeck";
import LearnDeck from "./components/Deck/Learn/LearnDeck";
import DeckHome from "./components/Deck/DeckHome";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { fetchAllDeck } from "./redux/actions/actions";
import LearnController from "./components/Deck/Learn/Controller/LearnController";
import DeckInfo from "./components/Deck/DeckInfo/DeckInfo";
import AllQuestion from "./components/Deck/DeckInfo/AllQuestion";
import QuestionEdit from "./components/Deck/DeckInfo/QuestionEdit";
import SpacedRep from "./components/Deck/Learn/SpacedRep";
import Login from "./components/Authentication/Login";
import SignUp from "./components/Authentication/SignUp";

function App() {
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo != null) dispatch(fetchAllDeck(userInfo.jwt, userInfo.userId));
  }, [userInfo]);

  return (
    <BrowserRouter basename="/Multiple-Choice-Web-client-side/">
      <div className="App">
        <Routes>
          <Route path="/signUp" element={<SignUp />} />
          <Route
            path="/"
            element={
              userInfo != null ? (
                <div>
                  <NavBar></NavBar>
                  <Home />
                </div>
              ) : (
                <div>
                  <Login />
                </div>
              )
            }
          />
          <Route
            path="/decks"
            element={
              userInfo != null ? (
                <div>
                  <NavBar />
                  <AllDeck />
                </div>
              ) : (
                <div>
                  <Login />
                </div>
              )
            }
          />
          <Route
            path="/decks/:id/learn/:shuffleQuestions/:shuffleChoices/:sortByPriority"
            element={
              userInfo != null ? (
                <div>
                  <NavBar />
                  <LearnDeck />
                </div>
              ) : (
                <div>
                  <Login />
                </div>
              )
            }
          />
          <Route
            path="/decks/:id/learn/controller"
            element={
              userInfo != null ? (
                <div>
                  <NavBar />
                  <LearnController />
                </div>
              ) : (
                <div>
                  <Login />
                </div>
              )
            }
          />
          <Route
            path="/decks/:id"
            element={
              userInfo != null ? (
                <div>
                  <NavBar />
                  <div style={{ textAlign: "center" }}>
                    <DeckHome />
                  </div>
                </div>
              ) : (
                <div>
                  <Login />
                </div>
              )
            }
          />
          <Route
            path="/decks/:id/spacedRep"
            element={
              userInfo != null ? (
                <div>
                  <NavBar />
                  <SpacedRep />
                </div>
              ) : (
                <div>
                  <Login />
                </div>
              )
            }
          />
          <Route
            path="/decks/:id/deckinfo"
            element={
              userInfo != null ? (
                <div>
                  <NavBar />
                  <DeckInfo />
                </div>
              ) : (
                <div>
                  <Login />
                </div>
              )
            }
          />
          <Route
            path="/decks/:id/deckinfo/allQuestions"
            element={
              userInfo != null ? (
                <div>
                  <NavBar />
                  <AllQuestion />
                </div>
              ) : (
                <div>
                  <Login />
                </div>
              )
            }
          />
          <Route
            path="/decks/:id/deckinfo/allQuestions/:questionId/edit"
            element={
              userInfo != null ? (
                <div>
                  <NavBar />
                  <QuestionEdit />
                </div>
              ) : (
                <div>
                  <Login />
                </div>
              )
            }
          />
          <Route
            path="/decks/:id/addCard"
            element={
              userInfo != null ? (
                <div>
                  <NavBar />
                  <AddQuestion />
                </div>
              ) : (
                <div>
                  <Login />
                </div>
              )
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
