"use client";
import { getUpcomingMovie } from "../../api";
import { useEffect, useState } from "react";

const UpcomingPage = () => {
  const [UpcomingPages, setUpcomingPages] = useState([]);

  useEffect(() => {
    getUpcomingMovie()
      .then((result) => {
        setUpcomingPages(result);
      })
      .catch((error) => {
        console.error("Error fetching popular movies:", error);
      });
  }, []);

  return (
    <>
      <div className="movie-section py-14 px-4 md:px-8">
        {/* Mobile: Horizontal Scroll */}
        <div className="md:hidden overflow-x-auto pb-4">
          <div className="flex gap-4 w-max">
            {UpcomingPages.map((movie, i) => (
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
                      <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
                        {movie.title}
                      </h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mt-2">
                        {movie.overview}
                      </p>
                    </a>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-yellow-500 text-sm">
                        ★ {movie.vote_average.toFixed(1)}
                      </span>
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

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {UpcomingPages.map((movie, i) => (
            <div key={i} className="card">
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
                    <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
                      {movie.title}
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mt-2">
                      {movie.overview}
                    </p>
                  </a>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-yellow-500 text-sm">
                      ★ {movie.vote_average.toFixed(1)}
                    </span>
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
    </>
  );
};

export default UpcomingPage;
