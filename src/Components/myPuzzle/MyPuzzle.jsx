import axios from "axios";
import { useState, useEffect } from "react";
import { useMy } from "../../context/myContext";
import Searchbar from "../comons/Searchbar";
import TimerBtns from "./TimerBtns";
import loadingImag from "../../assets/loading-gif.gif";
import { useLocation, useNavigate } from "react-router-dom";

export default function MyPuzzle() {
  const { state, setState } = useMy();
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleRandomClick = async () => {
    //get random movie name and image
    const randomQuryUrl = `http://143.110.166.202:8000/manual/300`;
    setLoading(true);
    try {
      const response = await axios.get(randomQuryUrl);
      setLoading(false);
      const { image, movie } = response.data;
      setState({ ...state, frameUrl: image, movieName: movie });
      navigate("/my-asking", { replace: true });
    } catch (error) {
      throw error;
    }
  };

  const getUserData = async (data) => {
    //get user movie name and image
    const randomQuryUrl = `http://143.110.166.202:8000/manual/300`;
    setLoading(true);
    try {
      const response = await axios.get(randomQuryUrl);
      setLoading(false);
      const { image, movie } = response.data;
      setState({ ...state, frameUrl: image, movieName: data });
      navigate("/my-asking", { replace: true });
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    clearInterval(window.timerIterval);
    setState({
      ...state,
      timer: 45,
      remainingAttempts: 5,
      failedAttepts: [],
      progress: "",
    });
  }, [location]);

  return (
    <>
      <p className="some_text">
        Play your with your friends and challenge their knowledge. Or hit Random
        to play yourself!
      </p>
      {isLoading ? (
        <div className="loading_wrapper">
          <img src={loadingImag} alt="Loading..." />
        </div>
      ) : (
        <div className="actions_wrapper">
          <div className="buttons_wrapper">
            <div className="timer">
              <p>Select time:</p>
              <TimerBtns />
            </div>
            <button className="randomBtn" onClick={handleRandomClick}>
              Random
            </button>
          </div>
          <Searchbar getUserData={getUserData} />
        </div>
      )}
    </>
  );
}
