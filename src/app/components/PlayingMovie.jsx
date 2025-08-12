"use client";
import { getPlayingMovie } from "../../api";
import { useEffect, useState } from "react";
import Link from "next/link";

const PlayingMovie = () => {
  const [PlayingMovies, setPlayingMovies] = useState([]);

  useEffect(() => {
    getPlayingMovie()
      .then((result) => {
        setPlayingMovies(result);
      })
      .catch((error) => {
        console.error("Error fetching popular movies:", error);
      });
  }, []);
  return (
    <>
      {/* Popular Movies Section */}
      <div className="movie-section mb-12">
        <div className="title flex justify-between items-center mb-6">
          <h3 className="font-semibold text-3xl">Now Playing Movies</h3>
          <Link
            href={"/popular"}
            className="hover:underline py-2 text-blue-600 font-medium"
          >
            See More
          </Link>
        </div>
        <div className="card-wrap overflow-x-auto pb-4">
          <div className="flex gap-4 w-max">
            {PlayingMovies.slice(0, 8).map((movie, i) => (
              <div key={i} className="card flex-shrink-0 w-56">
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 h-full">
                  <a href="#">
                    <img
                      className="rounded-t-lg w-full h-72 object-cover hover:opacity-70 transition-opacity duration-300"
                      src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${movie.poster_path}`}
                      alt="Movie poster"
                    />
                  </a>
                  <div className="p-4">
                    <a href="#">
                      <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2 truncate">
                        {movie.title}
                      </h5>
                      <p className="truncate">{movie.overview}</p>
                    </a>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-gray-500 text-sm">
                        {new Date(movie.release_date).toLocaleDateString(
                          "en-EN",
                          {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          }
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayingMovie;
