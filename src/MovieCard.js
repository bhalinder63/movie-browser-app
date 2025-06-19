import React from "react";
import fallbackPoster from "./fallbackimage.png";

const MovieCard = (props) => {
  return (
    <>
      <div className="container">
        {props.moviedata.length > 0 ? (
          props.moviedata.map((item) => (
            <div key={item.imdbID} className="movie-card">
              <img
                className="poster"
                src={item.Poster !== "N/A" ? item.Poster : fallbackPoster}
                alt={item.Title}
                onError={(e) => {
                  e.target.onerror = null; // Prevents infinite loop
                  e.target.src = fallbackPoster;
                }}
              />
              <h2 className="title">{item.Title}</h2>
              <h3 className="yearofrelease">{item.Year}</h3>
            </div>
          ))
        ) : (
          <h2>No movies found</h2>
        )}
      </div>
    </>
  );
};

export default MovieCard;
