import Header from "./Components/Header";
import "./App.css";
import MovieFrame from "./Components/MovieFrame";
import Searchbar from "./Components/Searchbar";

function App() {
  return (
    <>
      <div className="content_wrapper">
        <div className="App">
          <Header />
          <div className="content_card">
            <MovieFrame />
            <Searchbar />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
