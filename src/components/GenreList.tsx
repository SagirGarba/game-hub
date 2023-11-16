import React from "react";
import useGenres from "../hooks/UseGenres";

const GenreList = () => {
  const { genres } = useGenres();
  return (
    <li>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </li>
  );
};

export default GenreList;
