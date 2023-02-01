import { useState, useEffect } from "react";
// import bg/img images
import img1 from "../assets/bg/img1.jpg";
import img2 from "../assets/bg/img2.jpg";
import img3 from "../assets/bg/img3.avif";
//Import style
import "../App.css";

export default function Container({ children }) {
  const [bgImg, setBgImg] = useState("");

  let images = [img1, img2, img3];

  useEffect(() => {
    let imgNumber = Math.floor(Math.random() * 3);
    setBgImg(`url(${images[imgNumber]})`);
  }, []);

  return (
    <div className="app_bg" style={{ backgroundImage: bgImg }}>
      <div className="content_wrapper">
        <div className="container">{children}</div>
      </div>
    </div>
  );
}
