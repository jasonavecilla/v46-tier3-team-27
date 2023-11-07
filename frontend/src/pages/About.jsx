import { Helmet } from "react-helmet";
import image5 from "../assets/images/about5.jpeg";
import image6 from "../assets/images/about6.jpeg";
const About = () => {
  return (
    <>
      <Helmet>
        <title>About - Recipe App</title>
      </Helmet>
      <div>
        <img
          src={image5}
          className="h-[258px] w-[258px]  md:h-[425px] md:w-[425px] rounded-full    "
          alt=""
        />
        <div className="">
          <div className="">
            <img
              src={image6}
              className=" xl:w-64 xl:h-64 md:mt-[-15rem] m-0 ml-auto rounded-full h-[196px] w-[196px] "
            />
            <h1 className="text-[2.25rem] font-bold md:text-center mt-[-5rem] md:m-0 md:mt-[-79px] mr-auto md:text-[3.75rem] ">
              Recipes
            </h1>
            <h4 className="md:ml-[15rem] md:text-xl text-xl m-0 mr-auto mt-[3rem] font-bold">
              {" "}
              Health is the most precious
            </h4>
            <p className="md:ml-[15rem] mr-0 lg:mr-[6rem] md:text-lg  md:mt-[1.5rem] md:mr-[8rem]">
              While it is important to have naturally occurring sugars in your
              diet, many foods contain harmful added sugars that contain no
              nutritional value. <br></br>According to a study conducted by the
              University of Florida, the brain releases heroin-like chemicals
              called endogenous opioids when an individual indulges on sweet,
              salty or fatty foods.&nbsp;
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
