import React, { lazy, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { XIcon } from "@heroicons/react/solid";
import {
  closeModal,
  recommendMoviesByName,
} from "../Store/Features/movieSlice";
import { idleStatusRecord, record_movie_history } from "../Store/Features/searchSlice";
import CarouselSection from "../Component/CarouselSection";

const MovieModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.movie.isOpen);
  const selectedMovie = useSelector((state) => state.movie.selectedMovie);
  const statusRecord = useSelector((state) => state.search.statusRecord);
  const moviesByName = useSelector((state) => state.movie.moviesByName);

  useEffect(() => {
    if (selectedMovie) {
      if (statusRecord === "idle" || statusRecord === "failed") {
        dispatch(record_movie_history({ movie_name: selectedMovie.movie_title }));
      }
    }
  }, [moviesByName]);

  const handleOnCLick = (e) => {
    dispatch(closeModal());
    dispatch(idleStatusRecord());
  };

  if (!isOpen || !selectedMovie) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="relative bg-transparent backdrop-blur-xl text-white max-w-4xl w-full rounded-lg">
        <button
          onClick={() => handleOnCLick()}
          className="absolute top-4 right-4"
        >
          <XIcon className="h-7 w-7 text-white bg-red-600 z-[99999] border-2 rounded-full" />
        </button>
        <div className="overflow-hidden overflow-y-auto max-h-[90vh]">
          <div className="h-auto md:h-[43rem] overflow-hidden w-full flex flex-col-reverse md:flex-row">
            <div className="w-full md:w-1/2 flex justify-center items-center p-4 md:p-8">
              <div className="z-10 text-white max-w-md">
                <h1 className="text-3xl md:text-5xl font-bold">
                  {selectedMovie.movie_title || "HOUSE OF NINJAS"}
                </h1>
                <p className="mt-4 text-md md:text-lg">
                  Years after retiring from their ninja lives, a dysfunctional
                  family must return to the shadows...
                </p>
                <div className="mt-4 space-x-2 flex justify-center">
                  <a
                    className="bg-gradient-to-r from-red-800 to-red-600 text-white font-bold px-20 md:px-44 py-2 md:py-4 rounded-md hover:scale-95 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500"
                    target="_blank"
                       rel="noopener noreferrer" 
                    href={
                      selectedMovie.movie_imdb_link ||
                      "http://www.imdb.com/title/tt0325980/?ref_=fn_tt_tt_1"
                    }
                  >
                    Play
                  </a>
                </div>
              </div>
            </div>
            <div className="h-60 md:h-[40rem] w-full md:w-1/2">
              <img
                className="h-full w-full object-cover"
                src={selectedMovie.poster_url}
                alt={selectedMovie.movie_title}
              />
            </div>
          </div>
          <div className="px-4 md:px-10 py-4">
            <div className="flex flex-wrap items-center space-x-2 text-md mb-4">
              <span>{selectedMovie.title_year}</span>
              <span>•</span>
              <span>{selectedMovie.imdb_score}</span>
              <span>•</span>
              <span>{selectedMovie.content_rating}</span>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">Director Name:</h3>
              <p>{selectedMovie.director_name}</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">Cast:</h3>
              <p>
                {selectedMovie.actor_1_name}, {selectedMovie.actor_2_name}, {selectedMovie.actor_3_name}
              </p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">Genres:</h3>
              <p>{selectedMovie.genres.replace(/\|/g, ",")}</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">This show is:</h3>
              <p>{selectedMovie.plot_keywords.replace(/\|/g, ",")}</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">Maturity rating:</h3>
              <p>{selectedMovie.content_rating}</p>
            </div>
            <div className="px-4">
            {selectedMovie && (
              <CarouselSection
                title="More Like This:"
                movies={moviesByName}
                search={false}
              />
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
