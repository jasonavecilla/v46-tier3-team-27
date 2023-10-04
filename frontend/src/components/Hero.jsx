import React from "react";
import { Link } from "react-router-dom";
import { carouselImages } from "../assets/images";

const Hero = () => {
  return (
    <div className="grid items-center gap-2 lg:grid-cols-2">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          We&apos;ve already prepared meals for your family
        </h1>
        <p className="max-w-xl mt-8 text-lg leading-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          repellat explicabo enim soluta temporibus asperiores aut obcaecati
          perferendis porro nobis.
        </p>
        <div className="mt-10">
          <Link to="/recipes" className="btn btn-primary">
            Explore your favorite dishes
          </Link>
        </div>
      </div>
      <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image, index) => (
          <div key={index} className="carousel-item">
            <img src={image} className="object-cover h-full rounded-box w-80" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
