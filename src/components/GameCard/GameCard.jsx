import PropTypes from "prop-types";

import css from "./GameCard.module.css";

export const GameCard = ({
  gameImage,
  commonGameName,
  gameDescription,
  genre,
  inTop,
}) => {
  return (
    <li className={css.item}>
      <img src={gameImage} alt="Game image" className={css.cardImage} />
      <div className={css.bottom}>
        <h3 className={css.gameName}>{commonGameName}</h3>
        <p className={css.gameDescr}>{gameDescription}</p>
      </div>
      <div className={css.genre}>
        {inTop && <p className={css.genreTop}>TOP</p>}
        {genre && <p className={css.genreItem}>{genre}</p>}
      </div>
    </li>
  );
};

GameCard.propTypes = {
  gameImage: PropTypes.string,
  commonGameName: PropTypes.string,
  gameDescription: PropTypes.string,
  genre: PropTypes.string,
  inTop: PropTypes.bool,
};
