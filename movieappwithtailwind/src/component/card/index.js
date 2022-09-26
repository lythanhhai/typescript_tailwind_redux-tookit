import React from "react";
import "./style.css";

const Card = () => {
  return (
    <div className="card">
      <button className="absolute top-0 left-0 text-primary py-1 px-2 bg-white my-1 mx-1 rounded-md">
        120 mins
      </button>
      <img
        src="https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg"
        alt="image error"
      />
      <h4 className="pt-2 px-2">Batman Begins</h4>
      <h5 className="pb-2 px-2">Christian Bale</h5>
    </div>
  );
};

export default Card;
