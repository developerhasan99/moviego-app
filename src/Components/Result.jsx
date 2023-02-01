import googleIcon from "../assets/google-svgrepo-com.svg";
import MovieFrame from "./MovieFrame";

export default function Result({ state, setState }) {
  const modifiedMovieName = state.movieName.replaceAll(" ", "+");
  const googleUrl = `https://www.google.com/search?q=${modifiedMovieName}`;

  return (
    <>
      <MovieFrame frameUrl="https://framed.wtf/images/314/001.jpeg?w=1920&q=75" />
      <h1 className="congreats">Congratulation!</h1>
      <div className="resutMovieName">
        <h2>{state.movieName}</h2>
        <button>Share this!</button>
      </div>
      <a className="googleBtn" target="_blank" href={googleUrl}>
        <img height={24} width={24} src={googleIcon} alt="G" />
        Click to search it on Google!
      </a>
    </>
  );
}
