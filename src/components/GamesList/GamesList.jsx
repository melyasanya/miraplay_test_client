import { useSelector } from "react-redux";
import { getGames } from "../../redux/Games/GamesSelectors";
import css from "./GamesList.module.css";

export const GamesList = () => {
  const games = useSelector(getGames);

  return <div className={css.container}></div>;
};
