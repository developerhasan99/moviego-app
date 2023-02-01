export default function MovieFrame({ frameUrl }) {
  return (
    <div className="frame_wrapper">
      <img src={frameUrl} alt="Frame Image" />
    </div>
  );
}
