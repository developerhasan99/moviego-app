import googleIcon from "../../assets/google-svgrepo-com.svg";
import { useDaily } from "../../context/dailyContext";
import MovieFrame from "../comons/MovieFrame";

export default function DailyResult() {
  const { state } = useDaily();

  const modifiedMovieName = state.movieName.replaceAll(" ", "+");
  const googleUrl = `https://www.google.com/search?q=${modifiedMovieName}`;
  const shareableLink = `http://twitter.com/share?text=MovieGO%20-%20dayid${state.dayId}&url=www.movie-go.com/dailypuzzle`;

  return (
    <>
      {state.wins ? (
        <>
          <MovieFrame frameUrl={state.frameUrl} />
          <h1 className="congreats">Congratulations!</h1>
          <div className="resutMovieName">
            <h2>
              {state.progress}✅ {state.movieName}
            </h2>
            <a className="share_btn" target="_blank" href={shareableLink}>
              Share this!
            </a>
          </div>

          <a className="googleBtn" target="_blank" href={googleUrl}>
            <img height={24} width={24} src={googleIcon} alt="G" />
            Click to search it on Google!
          </a>
        </>
      ) : (
        <p className="direct_acess">Please Play first to see the result!</p>
      )}
    </>
  );
}
