import { useState } from "react";
import Header from "./Components/Header";
import MovieFrame from "./Components/MovieFrame";
import Searchbar from "./Components/Searchbar";
import Attempts from "./Components/Attempts";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  const [remainingAttempts, setRemainingAttempts] = useState(5);
  const [failedAttepts, setFailedAttepts] = useState([
    "Avengers",
    "Iron man",
    "Black wido",
    "Hulk",
    "Abonimation",
  ]);

  return (
    <>
      <div className="app_bg">
        <div className="content_wrapper">
          <div className="App">
            <Header />
            <div className="content_card">
              <MovieFrame />
              <Searchbar />
              <Attempts
                remainingAttempts={remainingAttempts}
                failedAttepts={failedAttepts}
              />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
