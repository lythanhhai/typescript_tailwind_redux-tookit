import React from "react";
import Card from "../card/index.js";

const ListMovie = () => {
  return (
    <div className="w-11/12">
      <h1 className="ml-10">#1 Free Online Movie Streaming Site in Vietnam</h1>
      <h2 className="text-3xl ml-10 border-primary border-b-2 py-3">
        Trending
      </h2>
      <div className="grid grid-cols-4 gap-6 ml-10 my-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="flex flex-row justify-center w-ful ml-10 mb-16">
        <button className="uppercase border-primary border-2 py-1 px-2 hover:text-white hover:bg-primary">
          Load more
        </button>
      </div>
    </div>
  );
};

export default ListMovie;
