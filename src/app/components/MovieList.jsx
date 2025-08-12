"use client";

import PopularMovie from "./PopularMovie";
import PlayingMovie from "./PlayingMovie";
import UpcomingMovie from "./UpcomingMovie";
import Link from "next/link";

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
