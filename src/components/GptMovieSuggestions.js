import React from "react";
import { useSelector } from "react-redux";

const GptMovieSuggestions = () => {
  const store = useSelector((store) => store?.gpt?.movieResults);
  if (!store) return;
  return (
    <div className=" bg-black w-screen h-full text-white grid  grid-cols-1 md:grid-cols-2 bg-opacity-50   ">
      {store.map((item) => (
        <div className="md:flex md:flex-col md:w-[500px]  px-[50px] py-5">
          <img
            className=" "
            src={"https://image.tmdb.org/t/p/w500/" + item?.backdrop_path}
            alt=""
          />
          <h1>{item.original_title}</h1>
          <h1>{item.overview}</h1>
        </div>
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
