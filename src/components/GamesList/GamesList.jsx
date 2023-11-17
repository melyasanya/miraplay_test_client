import { useSelector } from "react-redux";

import { getGames } from "../../redux/Games/GamesSelectors";
import { GameCard } from "../GameCard/GameCard";

import css from "./GamesList.module.css";

export const GamesList = () => {
  const games = useSelector(getGames);

  return (
    <div className={css.container}>
      <ul className={css.gamesList}>
        {games.map(
          ({
            _id,
            gameImage,
            commonGameName,
            gameDescription,
            genre,
            inTop,
          }) => {
            return (
              <GameCard
                key={_id}
                gameImage={gameImage}
                commonGameName={commonGameName}
                gameDescription={gameDescription}
                genre={genre}
                inTop={inTop}
              />
            );
          }
        )}
      </ul>
    </div>
  );
};
