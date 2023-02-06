import { useMy } from "../../context/myContext";

export default function TimerBtns() {
  const { state, setState } = useMy();

  const handleClick = (time) => {
    setState({ ...state, timer: time });
  };

  return (
    <div className="timer_buttons_wrapper">
      <button
        onClick={() => handleClick(15)}
        className={state.timer === 15 ? "timeBtn active" : "timeBtn"}
      >
        15
      </button>
      <button
        onClick={() => handleClick(30)}
        className={state.timer === 30 ? "timeBtn active" : "timeBtn"}
      >
        30
      </button>
      <button
        onClick={() => handleClick(45)}
        className={state.timer === 45 ? "timeBtn active" : "timeBtn"}
      >
        45
      </button>
    </div>
  );
}
