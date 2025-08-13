"use client";

import PopularMovie from "./PopularMovie";
import PlayingMovie from "./PlayingMovie";
import UpcomingMovie from "./UpcomingMovie";

const MovieList = () => {
  return (
    <>
      <PlayingMovie />
      <PopularMovie />
      <UpcomingMovie />
    </>
  );
};

export default MovieList;
