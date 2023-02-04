import { useGame } from "../context/gameContext";

export default function MovieFrame() {
  const { state } = useGame();

  return (
    <div className="frame_wrapper">
      {state.frameUrl ? (
        <img src={state.frameUrl} alt="Frame Image" />
      ) : (
        <div className="skeleton"></div>
      )}
    </div>
  );
}
