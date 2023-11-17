import { Games } from "../../components/Games/Games";
import css from "./GamesPage.module.css";

export const GamesPage = () => {
  return (
    <div className={css.container}>
      <div className={css.content}>
        <Games />
      </div>
    </div>
  );
};
