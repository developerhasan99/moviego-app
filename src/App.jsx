import { useState } from "react";
import Header from "./Components/Header";
import MovieFrame from "./Components/MovieFrame";
import Searchbar from "./Components/Searchbar";
import Attempts from "./Components/Attempts";
import Footer from "./Components/Footer";

// import feature images
import img1 from "./assets/feature1.jpg";
import img2 from "./assets/feature2.jpg";
import img3 from "./assets/feature3.jpg";
import img4 from "./assets/feature4.jpg";
import img5 from "./assets/feature5.jpg";
import img6 from "./assets/feature6.jpg";
import img7 from "./assets/feature7.jpg";
import img8 from "./assets/feature8.jpg";
import img9 from "./assets/feature9.png";
import img10 from "./assets/feature10.jpg";

import "./App.css";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [remainingAttempts, setRemainingAttempts] = useState(5);
  const [failedAttepts, setFailedAttepts] = useState([
    "Avengers",
    "Iron man",
    "Black wido",
    "Hulk",
    "Abomination",
  ]);

  let images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  let imgNumber = Math.floor(Math.random() * 10);

  let bgImg = `url(${images[imgNumber]})`;

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
