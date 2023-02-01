import { useEffect, useState } from "react";
import Container from "./Components/Container";
import Header from "./Components/Header";
import MovieFrame from "./Components/MovieFrame";
import Searchbar from "./Components/Searchbar";
import Attempts from "./Components/Attempts";
import Footer from "./Components/Footer";
import Result from "./Components/Result";

function App() {
  const [state, setState] = useState({
    frameUrl: "https://framed.wtf/images/314/001.jpeg?w=1920&q=75",
    movieName: "Avengers",
    wins: false,
    remainingAttempts: 5,
    searchValue: "",
    failedAttepts: [],
  });

  const compareUserData = (userData) => {
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
