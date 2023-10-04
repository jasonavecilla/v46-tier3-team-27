import React from "react";
import { images } from "./assets/images";

const App = () => {
  return (
    <>
      {" "}
      <h1 className="text-3xl font-bold text-center underline">
        Recipe Frontend
      </h1>{" "}
      <div className="grid mt-4 place-items-center">
        <div className="text-center w-80 h-80 carousel carousel-center rounded-box">
          {images.map((image, index) => (
            <div className="carousel-item" key={index}>
              <img src={image} alt={`image  ${index + 1}`} />
            </div>
          ))}
        </div>{" "}
      </div>
    </>
  );
};

export default App;
