import { Link } from "react-router-dom";

import css from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={css.navigation}>
      <ul className={css.navigationList}>
        <li className={css.navigationItem}>
          <Link>
            <h2 className={css.title}>Ігри</h2>
          </Link>
        </li>
        <li className={css.navigationItem}>
          <Link>
            <h2 className={css.title}>Про платформу</h2>
          </Link>
        </li>
        <li className={css.navigationItem}>
          <Link>
            <h2 className={css.title}>Здай в оренду свій ПК</h2>
          </Link>
        </li>
        <li className={css.navigationItem}>
          <Link>
            <h2 className={css.title}>Новини</h2>
          </Link>
        </li>
        <li className={css.navigationItem}>
          <Link>
            <h2 className={css.title}>FAQ</h2>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
