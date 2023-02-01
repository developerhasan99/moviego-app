import { useEffect, useState } from "react";
import Header from "./Components/Header";
import MovieFrame from "./Components/MovieFrame";
import Searchbar from "./Components/Searchbar";
import Attempts from "./Components/Attempts";
import Footer from "./Components/Footer";

// import bg/img images
import img1 from "./assets/bg/img1.jpg";
import img2 from "./assets/bg/img2.jpg";
import img3 from "./assets/bg/img3.avif";

import "./App.css";

function App() {
  const [bgImg, setBgImg] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [remainingAttempts, setRemainingAttempts] = useState(5);
  const [failedAttepts, setFailedAttepts] = useState([
    "Avengers",
    "Iron man",
    "Black wido",
    "Hulk",
    "Abomination",
  ]);

  let images = [img1, img2, img3];

  useEffect(() => {
    let imgNumber = Math.floor(Math.random() * 3);

    setBgImg(`url(${images[imgNumber]})`);
  }, []);

  return (
    <>
      <div className="app_bg" style={{ backgroundImage: bgImg }}>
        <div className="content_wrapper">
          <div className="App">
            <Header />
            <div className="content_card">
              <MovieFrame />
              <Searchbar
                setSearchValue={setSearchValue}
                searchValue={searchValue}
              />
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
