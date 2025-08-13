"use client";
import { useEffect, useState } from "react";
import { getMoviedetail } from "@/api";
import React from "react";

const page = ({ params }) => {
  const [DetailPage, setDetailPage] = useState({});
  const resolvedParams = React.use(params);

  useEffect(() => {
    if (resolvedParams.id) {
      getMoviedetail(resolvedParams.id)
        .then((result) => {
          setDetailPage(result);
        })
        .catch((error) => {
          console.error("Error fetching movie detail:", error);
        });
    }
  }, [resolvedParams.id]);

  return (
    <div className="wrap flex min-h-screen flex-col md:flex-row py-28 px-16 md:px-24 gap-8">
      <div className="image flex-shrink-0 w-full md:w-80 lg:w-96">
        <img
          className="w-full h-80 md:h-96 lg:h-[500px] object-cover rounded-lg shadow-lg"
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${DetailPage.poster_path}`}
          alt={DetailPage.title}
        />
      </div>
      <div className="caption">
        <div className="title">
          <h1 className="text-2xl font-bold">{DetailPage.title}</h1>
          <p>{DetailPage.status}</p>
        </div>
        <span className="text-gray-500 text-sm">
          {new Date(DetailPage.release_date).toLocaleDateString("en-EN", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>
        <div className="genres my-2">
          {DetailPage.genres?.map((genre) => (
            <span
              key={genre.id}
              className="inline-block bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 gap-4 rounded mr-2"
            >
              {genre.name}
            </span>
          ))}

          <div className="adult mt-2">
            {DetailPage.adult ? (
              <span className="text-red-500 text-xs font-semibold">18+</span>
            ) : (
              <span className="text-green-500 text-xs font-semibold">
                All Ages
              </span>
            )}
          </div>
        </div>
        <div className="rate">
          <span className="text-yellow-500 text-sm">
            ★ {DetailPage.vote_average?.toFixed(1)}
          </span>
        </div>
        <div className="description">
          <p className="text-base text-gray-600 mt-2">{DetailPage.overview}</p>
        </div>
        <div className="production-company">
          <h2 className="text-lg font-semibold mt-4">Production Companies</h2>
          <ul className="list-disc list-inside">
            {DetailPage.production_companies?.map((company) => (
              <li key={company.id} className="text-sm text-gray-700">
                {company.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
