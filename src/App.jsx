import { Routes, Route } from "react-router-dom";
import Container from "./Components/Container";
import Header from "./Components/Header";
import Home from "./Components/Home";
import DaillyPuzzle from "./Components/DailyPuzzle";
import MyPuzzle from "./Components/MyPuzzle";
import Result from "./Components/Result";
import Footer from "./Components/Footer";

function App() {
  return (
    <Container>
      <Header />
      <div className="content_card">
        <Routes>
          <Route path="/dailypuzzle" element={<DaillyPuzzle />} />
          <Route path="/mypuzzle" element={<MyPuzzle />} />
          <Route path="/result" element={<Result />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </Container>
  );
}

export default App;
