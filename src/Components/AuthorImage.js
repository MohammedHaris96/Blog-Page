import React from "react";
import { publicImage } from "../utils/functions";
import "./Styles/AuthorImage.css";
const imgUrl = "/assets/user.jpg";
// import img from "./assets/a.jpg"
const AuthorImage = () => {
  return (
    <div>
      <div className="author-img">
        <div className="author-image">
          <img
            src={publicImage(imgUrl)}
            alt="author"
            style={{ height: "200px", width: "300px", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};

export default AuthorImage;
