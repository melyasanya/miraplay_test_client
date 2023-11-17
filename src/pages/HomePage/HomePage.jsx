import { LoginAndRegistration } from "../../components/LoginAndRegistration/LoginAndRegistration";

import css from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <div className={css.container}>
      <div className={css.content}>
        <LoginAndRegistration />
      </div>
    </div>
  );
};
