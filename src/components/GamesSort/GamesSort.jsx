import PropTypes from "prop-types";

import { sortingList } from "../../helpers/SortingList";

import css from "./GamesSort.module.css";

export const GamesSort = ({
  selectedGenre,
  setSelectedGenre,
  setPage,
  mutation,
  setFreshFirst,
  freshFirst,
}) => {
  const changeGenre = async (genre) => {
    await setSelectedGenre(genre);
    await setPage(1);
    await setFreshFirst(true);
    mutation();
  };

  const onSort = async (e) => {
    await setFreshFirst(JSON.parse(e.target.value.toLowerCase()));
    mutation();
  };

  return (
    <div className={css.sortCont}>
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
      <p className={css.sort}>Сортувати</p>
      <select name="sort" value={freshFirst} onChange={onSort}>
        <option value="true">Спочатку нові</option>
        <option value="false">Спочатку старі</option>
      </select>
    </div>
  );
};

GamesSort.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  setSelectedGenre: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
  mutation: PropTypes.func.isRequired,
  setFreshFirst: PropTypes.func.isRequired,
  freshFirst: PropTypes.bool.isRequired,
};
