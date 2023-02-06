import { Routes, Route } from "react-router-dom";
import Container from "./Components/Container";
import Header from "./Components/Header";
import Home from "./Components/Home";
import DaillyPuzzle from "./Components/dailyPuzzle/DailyPuzzle";
import DailyResult from "./Components/dailyPuzzle/DailyResult";
import MyPuzzle from "./Components/myPuzzle/MyPuzzle";
import MyAsking from "./Components/myPuzzle/MyAsking";
import MyResult from "./Components/myPuzzle/MyResult";
import Footer from "./Components/Footer";

function App() {
  return (
    <Container>
      <Header />
      <div className="content_card">
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/dailypuzzle" element={<DaillyPuzzle />} />
          <Route path="/daily-result" element={<DailyResult />} />
          <Route path="/mypuzzle" element={<MyPuzzle />} />
          <Route path="/my-asking" element={<MyAsking />} />
          <Route path="/my-result" element={<MyResult />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </Container>
  );
}

export default App;
