"use client";

import { useRef } from "react";
import MovieList from "./MovieList";
import { FaArrowRight } from "react-icons/fa";

const Jumbotron = () => {
  const movieRef = useRef(null);
  return (
    <>
      {/* Banner  */}
      <div
        className="min-h-screen relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/jumbotron-bg.jpg')" }}
      >
        <div className="layer absolute inset-0 bg-black/20 bg-opacity-50 flex items-center justify-center">
          <div className="caption text-center text-white max-w-4xl px-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Welcome to Filming
            </h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              Discover the latest movies, popular movies, top-rated films, and
              upcoming releases in one hand.
            </p>
            <a
              onClick={() =>
                movieRef.current.scrollIntoView({ behavior: "smooth" })
              }
              className="group flex justify-center items-center mx-auto bg-blue-700 max-w-sm hover:bg-blue-900 text-white font-semibold py-2 px-5 rounded-full transition-colors duration-300 text-lg cursor-pointer"
            >
              Get Started Today
              <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
      {/* Movie List */}
      <div className="wrap py-12 px-4 md:px-12" ref={movieRef}>
        <MovieList />
      </div>
    </>
  );
};

export default Jumbotron;
