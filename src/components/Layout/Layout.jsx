import { Outlet } from "react-router-dom";
import { Icons } from "../Icons/Icons";
import { Navigation } from "../Navigation/Navigation";
import css from "./Layout.module.css";

export const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <div className={css.container}>
          <Navigation />
          <Icons />
        </div>
      </header>

      <Outlet />
    </>
  );
};
