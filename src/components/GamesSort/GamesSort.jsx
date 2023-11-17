import { useState } from "react";
import { sortingList } from "../../helpers/SortingList";
import css from "./GamesSort.module.css";

export const GamesSort = ({ selectedGenre, setSelectedGenre }) => {
  const changeGenre = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <div>
      <ul className={css.genresList}>
        {sortingList.map((el, i) => {
          return (
            <li
              className={
                selectedGenre === el
                  ? `${css.genresItem} ${css.selected}`
                  : css.genresItem
              }
              id={el}
              key={i}
              onClick={() => changeGenre(el)}
            >
              {el}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
