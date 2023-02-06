export default function MovieFrame({ frameUrl }) {
  return (
    <div className="frame_wrapper">
      {frameUrl ? (
        <img src={frameUrl} alt="Frame Image" />
      ) : (
        <div className="skeleton"></div>
      )}
    </div>
  );
}
