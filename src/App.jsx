import { useEffect, useState } from "react";
import axios from "axios";
import Container from "./Components/Container";
import Header from "./Components/Header";
import MovieFrame from "./Components/MovieFrame";
import Searchbar from "./Components/Searchbar";
import Attempts from "./Components/Attempts";
import Footer from "./Components/Footer";
import Result from "./Components/Result";

// local storage setup
const setLocal = (attemptNum) => {
  window.localStorage.setItem("remainingAttempts", attemptNum);
};

const localRemainingAttempst = localStorage.getItem("remainingAttempts");

if (!localRemainingAttempst) {
  setLocal("5");
}

const updateRLA = (state, setState) => {
  setState({
    ...state,
    remainingAttempts: JSON.parse(localRemainingAttempst),
  });
};

function App() {
  const [state, setState] = useState({
    frameUrl: "",
    movieName: "Avengers",
    dayId: "",
    wins: false,
    remainingAttempts: 5,
    searchValue: "",
    failedAttepts: [],
  });
  const [suggestion, setSuggestion] = useState([]);

  const fetchInitialData = async () => {
    const queryUrl = `http://143.110.166.202:8000/daily/`;

    const response = await axios.get(queryUrl);
    const { image, movie, dayid } = response.data;
    setState({ ...state, frameUrl: image, movieName: movie, dayId: dayid });
  };

  useEffect(() => {
    updateRLA(state, setState);
    fetchInitialData();
  }, []);

  const compareUserData = (userData) => {
    let newLocalA = JSON.stringify(state.remainingAttempts - 1);
    setLocal(newLocalA);
    setSuggestion([]);
    if (userData.toLowerCase() !== state.movieName.toLowerCase()) {
      setState({
        ...state,
        remainingAttempts: state.remainingAttempts - 1,
        failedAttepts: [...state.failedAttepts, userData],
        searchValue: "",
      });
      return;
    }

    setState({ ...state, wins: true });
  };

  return (
    <Container>
      <Header />
      <div className="content_card">
        {state.wins ? (
          <Result state={state} setState={setState} />
        ) : (
          <>
            <MovieFrame frameUrl={state.frameUrl} />
            <Searchbar
              state={state}
              setState={setState}
              suggestion={suggestion}
              setSuggestion={setSuggestion}
              compareUserData={compareUserData}
            />
            <Attempts
              state={state}
              setState={setState}
              compareUserData={compareUserData}
            />
          </>
        )}
      </div>
      <Footer />
    </Container>
  );
}

export default App;
