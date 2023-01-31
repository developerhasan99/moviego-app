export default function Preloader({ innerRef }) {
  return (
    <div ref={innerRef} className="preloader_wrapper">
      <div id="loader" className="bounce"></div>
    </div>
  );
}
